const Youtube = ({ dataYtLink }) => {
  return (
    <div className="shadow-md w-full h-80 p-10 bg-[#ecece9]">
      {dataYtLink.map((value, index) => (
        <iframe
          key={index}
          className="w-full h-full"
          src={value.link}
          title="Pemutar video YouTube"
          allowFullScreen
        ></iframe>
      ))}
    </div>
  );
};

export default Youtube;
