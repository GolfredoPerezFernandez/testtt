import { FC, ReactNode } from 'react';
import { Container, Grid, GridItem } from '@chakra-ui/react';
import { Header } from 'components/modules';
import Head from 'next/head';


const Default: FC<{ children: ReactNode; pageName: string; width: number; height: number }> = ({
  children,
  pageName,
  width,
  height,
}) => (
  <Grid
    overflow={'hidden'}
    overflowX={'hidden'}
    overflowY={'hidden'}
    width={width}
    minW={width}
    maxW={width}
    templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
    gridTemplateRows={'0 1fr 0px'}
    gridTemplateColumns={width < 900 ? '0 0fr' : '0px 1fr'}
    backgroundColor={'#161A42'}
    color="white"
    fontWeight="bold"
  >
    <>
      <GridItem
        position={'absolute'}
        style={{
          width: '100%',
          background: '#161A42',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        pl="0"
        area={'header'}
      >
        <Head>
          <title>{`${pageName} | TheCooties`}</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Header width={width} height={height} />
      </GridItem>

      
      <GridItem
          backgroundColor={"#161A42"}
        justifyContent={'center'}
        area={'main'}
      >
        <Container
          backgroundColor={"#161A42"}
          justifyContent={'center'}
          alignItems={'center'}
          maxW={width}
          as="main"
        >
          {children}
        </Container>
      </GridItem>
    </>
  </Grid>
);

export default Default;
