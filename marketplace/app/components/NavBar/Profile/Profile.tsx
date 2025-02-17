interface CloseableComponentProps {
    close: () => void;
  }


export default function profile({close}:CloseableComponentProps){
    return (
        <div>
            profile
        </div>
    )
}