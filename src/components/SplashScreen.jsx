import logo from "../../assets/logo2.png";

export default function SplashScreen() {
  return (
    <div className="splash">
      <style>
        {`
          .splash {
            position: fixed;
            inset: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            /* your dark blue background style */
            background: linear-gradient(135deg, #1e3a8a, #2563eb, #1d4ed8);

            z-index: 9999;
          }

          /* circular wrapper */
          .logo-wrapper {
            width: 180px;
            height: 180px;
            border-radius: 50%;
            background: rgba(255,255,255,0.15);
            display: flex;
            align-items: center;
            justify-content: center;

            backdrop-filter: blur(10px);
            box-shadow: 0 0 30px rgba(0,0,0,0.3);

            animation: popZoom 1.2s ease-out forwards;
          }

          .logo {
            width: 120px;
            height: 120px;
            object-fit: contain;
          }

          .title {
            margin-top: 20px;
            font-size: 22px;
            font-weight: 700;
            color: white;
            text-align: center;
            opacity: 0;
            animation: fadeIn 1.5s ease forwards;
            animation-delay: 0.8s;
          }

          @keyframes popZoom {
            0% {
              transform: scale(0.2);
              opacity: 0;
            }
            60% {
              transform: scale(1.15);
              opacity: 1;
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>

      <div className="logo-wrapper">
        <img src={logo} alt="logo" className="logo" />
      </div>

      <h2 className="title">Suvidha Relocation Services</h2>
    </div>
  );
}
