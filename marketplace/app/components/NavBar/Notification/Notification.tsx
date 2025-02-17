interface CloseableComponentProps {
    close: () => void;
  }


export default function Notification({close}:CloseableComponentProps){
    return (
        <div>
            Notification
        </div>
    )
}