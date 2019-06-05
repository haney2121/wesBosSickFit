import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Item from './Item';
import styled from 'styled-components';

const Center = styled.div`
  text-align: center;
`;

const ItemsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  padding: 2rem;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`;

export const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY {
    items {
      title
      id
      price
      description
      image
      largeImage
    }
  }
`;

const Items = () => {
  return (
    <Center>
      <Query query={ALL_ITEMS_QUERY}>
        {({ data, loading, error }) => {
          if (loading) return <h1>Loading....</h1>;
          if (error) return <h1>Error: {error.message}</h1>;
          return (
            <ItemsList>
              {data.items.map(item => (
                <Item key={item.id} item={item} />
              ))}
            </ItemsList>
          );
        }}
      </Query>
    </Center>
  );
};

export default Items;
