import { Context } from "vm";
import { getXataClient } from "../../src/xata";

const DecodeSecret = ({ id }: { id: number }) => {
  return <div>{id}</div>;
};
export default DecodeSecret;
export async function getServerSideProps(context: Context) {
  const xata = getXataClient();
  const { id } = context.query;
  const record = await xata.db.secrets_database.read(`rec_${id}`);
  if (!record) {
    var check = await xata.db.expired_secrets_alias.getAll();
    check = check.filter((item) => item.alias === `rec_${id}`);
    if (check) {
      return {
        redirect: {
          destination: "/expired",
        },
      };
    }
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }
  var views = record.visits;
  var validity = record.validity;
  if (validity !== -1) {
    views = views + 1;
    await xata.db.secrets_database.update(`rec_${id}`, {
      visits: views,
    });
    if (views > validity) {
      await xata.db.expired_secrets_alias.create({
        alias: `rec_${id}`,
      });
      await xata.db.secrets_database.delete(`rec_${id}`);
      return {
        redirect: {
          destination: "/expired",
          permanent: false,
        },
      };
    }
  }
  return {
    props: {
      id,
    },
  };
}
