import './Feature.scss';

const Feature = ({ children, heading, title }) => {
  return (
    <div className='feature'>
      <strong>{children}</strong>
      {/* children: giá trị ở giữa thẻ đóng và mở component */}
      <h2 className='feature-heading'>{heading}</h2>
      <p className='feature-title'>{title}</p>
    </div>
  );
};

export default Feature;
