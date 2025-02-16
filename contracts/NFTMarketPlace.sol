// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import {ERC721URIStorage} from "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "../node_modules/@openzeppelin/contracts/utils/Counters.sol";


import "hardhat/console.sol";

contract NFTMarketPlace is ERC721URIStorage{
    using Counters for Counters.Counters;
    Counters.Counter private _tokenIds;
    Counters.Counter private _itemsSold;

    uint256 private _nextTokenId;
    uint listingPrice=0.00001 ether;
    address payable owner;
    mapping(uint=>MarketItem) private idMarketItem;

    struct MarketItem{
        uint tokenId;
        address payable seller;
        address payable owner;
        uint price;
        bool sold;
    }

    event idMarketItemCreated(
        uint indexed tokenId,
        address seller,
        address owner,
        uint price,
        bool sold
    );
    modifier onlyOwner(){
        require(msg.sender == owner,"only owner of the marketplace can change the listing price");
        _;// This is required to continue the execution of the function using this modifier.
    }

    constructor() ERC721("NFT TOKEN","MYNFT"){
        owner ==payable(msg.sender);
    }


    function updateListingPrice(uint _listingprice) public payable onlyOwner{
       listingPrice =_listingprice
    };

    function getListingPrice() public view returns (uint){
        return listingPrice;
    }

    //Let create "create nft token function"
    function createToken(string memory tokenURI,uint price) public payable returns(uint){
        uint256 newTokenId = _nextTokenId++;
        _safeMint(msg.sender,newTokenId);
        _setTokenURI(newTokenId,tokenURI);

        createMarketItem(newTokenId, price);
        return newTokenId;

    }

    function createMarketItem(uint tokenId,uint price) private{
        require(price>0,"price must be at lest 1");
        require(msg.value==listingPrice,"price must be equal to listing price");

        idMarketItem[tokenId]= MarketItem(
            tokenId,
            payable(msg.sender),
            payable(address(this)),
            price,
            false,
        );

        _transfer(msg.sender, address(this), tokenId);

        emit idMarketItemCreated(tokenId,msg.sender,address(this),price,false);
    }

    function reSellToken(uint tokenId, uint price)public payable(){
        require(idMarketItem[tokenId].owner == msg.sender,"only item owner can perform this operation");
        require(msg.value == listingPrice, "price must be equal to listingPrice");
        
        idMarketItem[tokenId].sold=false;
        idMarketItem[tokenId].price=price;
        idMarketItem[tokenId].seller=payable(msg.sender);
        idMarketItem[tokenId].owner=payble(address(this));

        _itemeSold.decrement();

        _transfer(msg.sender, address(this), tokenId);

    }


    function createMarketSale(uint tokenId) public payable{
        uint price =idMarketItem[tokenId].price;
        require(msg.vlaue== price,"pleace submit the asking price in order to complete the transection");
        
        idMarketItem[tokenId].owner=payable(msg.sender);
        idMarketItem[tokenId].sold=true;
        idMarketItem[tokenId].owner=payble(address(0));

        _itemsSold.increament();

        _transfer(address(this),msg.sender,tokenId);
        payable(owner).transfer(listingPrice);
    }


        function fetchMarketItem()public view returns(MarketItem[] memory){
            uint itemCount=_tokenIds.current();
            uint unSoldItemCount=_tokenIds.current();-_itemeSold.current();
            uint currentIndex=0;

            MarketItem[] memory items= new MarketItem[](unSoldItemCount);
            for (uint i=0; i< itemCount; i++){
                if(idMarketItem[i+1].owner==address(this)){
                   uint currentId =i+1;
                   MarketItem storage currentItem=IdMarketItem[currentId];
                   items[currentIndex]=currentItem;
                   currentIndex +=1
                }
            }
            return items;
            
        }

        //purchase item
        function fetchMyNFT()public view returns(MarketItem[] memory){
            uint totalCount=_tokenIds.current();
            uint itemCount=0;
            uint currentIndex=0;

            for(uint i=0; i<totalCount; i++){
                if(idMarketItem[i+1].owner==msg.sender){
                    itemCount += 1;
                }
            }
            MarketItem[] memory items=new MarketItem[](itemCount);
            for(uint i=0;i<totalCount;i++){
                if(idMarketItem[i+1].owner == msg.sender){
                     uint currentId=i+1;
                MarketItem storage currentItem=idMarketItem[currentId];
                items[currentIndex]=currentItem;
                currentIndex+=1;
                }
               
            }
            return items;
        }

        //Single user items

        function fetchItemListed() public view returns(MarketItem[] memory){
            uint totalCount=_tokenIds.current();
            uint itemCount=0;
            uint currentIndex=0;
            for(uint i=0; i<totalCount;i++){
                if(IdMarketItem[i+1].seller == msg.sender){
                    itemCount+=1;
                }
            }
            MarketItem[]memory items= new MarketItem[](itemCount);
            for(uint i =0;i<totalCount;i++){
                if(idMarketItem[i+1].seller==msg.sender){
                    uint currentd=i+1;

                    MarketItem storage currentItem=idMarketItem[currentId];
                    items[currentIndex]=currentItem;
                    currentIndex+=1;
                }
            }
            return items;
        }
}