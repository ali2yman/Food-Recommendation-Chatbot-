import Swal from "sweetalert2";
import "../../Style/Bubbles.css";

export default function Bubbles(props) {
  const copySucceeded = () => {
    Swal.fire({
      title: "Message copied",
      html: "Copied!",
      timer: 300,
      icon: "success",
      showConfirmButton: false,
    });
  };

  return (
    <>
      <div className={props.className}>
        <div className="message-bubble">
          <p
            onClick={() => {
              navigator.clipboard.writeText(props.message);
              copySucceeded();
            }}
          >
            {props.message}
          </p>
        </div>
      </div>
    </>
  );
}
