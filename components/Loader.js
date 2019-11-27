const Loader = ({ style }) => (
  <span className="loader" style={style}>Loading...
    <style jsx>{`
      .loader,
      .loader:after {
        border-radius: 50%;
        width: 25px;
        height: 25px;
      }
      .loader {
        font-size: 10px;
        position: relative;
        text-indent: -9999em;
        border-top: 2px solid #fff;
        border-right: 2px solid #fff;
        border-left: 2px solid #000;
        -webkit-transform: translateZ(0);
        -ms-transform: translateZ(0);
        transform: translateZ(0);
        -webkit-animation: loader 1.1s infinite linear;
        animation: loader 1.1s infinite linear;
      }
      @-webkit-keyframes loader {
        0% {
          -webkit-transform: rotate(0deg);
          transform: rotate(0deg);
        }
        100% {
          -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }
      @keyframes loader {
        0% {
          -webkit-transform: rotate(0deg);
          transform: rotate(0deg);
        }
        100% {
          -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }
    `}</style>
  </span>
)

export default Loader
