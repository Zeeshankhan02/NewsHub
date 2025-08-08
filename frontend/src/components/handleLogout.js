import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const useHandleLogout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    let timerInterval;
    Swal.fire({
      title: "Alert!",
      html: "<b>Logging Out</b>",
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const timer = Swal.getPopup().querySelector("b");
        timerInterval = setInterval(() => {
          timer.textContent = `Logging Out`;
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        localStorage.removeItem("token");
        navigate("/");
        window.location.reload()
      }
    });
  };

  return handleLogout;
};
