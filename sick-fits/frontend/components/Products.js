import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

const allProductsQuery = gql`
  query ALL_PRODUCTS_QUERY {
    allProducts {
      id
      name
      price
      description
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

export default function Products() {
  const { data, error, loading } = useQuery(allProductsQuery);
  console.log({ data, error, loading });

  if (loading) {
    return <p>Loading, please hold the line...</p>;
  }

  if (error) {
    return <p>Error requesting products.</p>;
  }

  return (
    <div>
      {data &&
        data.allProducts.map((product) => (
          <p key={product.id}>{product.name}</p>
        ))}
    </div>
  );
}
