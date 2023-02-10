import { Default } from 'components/layouts/Default';
import { NextPage } from 'next';
import { DAO } from 'components/templates/dao';

const DAOPage: NextPage<any> = (props) => {
  return (
    <Default width={props.width} height={props.height} pageName="DAO">
      <DAO {...props} />
    </Default>
  );
};

export default DAOPage;
