import UpdateItem from '../components/UpdateItem';

const Sell = props => {
  const { id } = props.query;
  return <UpdateItem id={id} />;
};

export default Sell;
