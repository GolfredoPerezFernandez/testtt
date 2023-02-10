
/* eslint-disable complexity */
import { FC } from 'react';
import { ISubNav } from '../SubNav/SubNav';
import { SubNav } from '../SubNav';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import {
  Box,
  Link as Link2,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
 

import Link from 'next/link';
const NavItem: FC<ISubNav> = ({ label, children, href }) => {
  const linkColor = useColorModeValue('white', 'white');
  const linkActiveColor = useColorModeValue('gray.800', 'white');
  const router = useRouter();
  const isCurrentPath = router.asPath === href || (href !== '/' && router.pathname.startsWith(href || ''));

  return (
    <Popover trigger={'hover'} placement={'bottom-start'}>
      <PopoverTrigger>
        <Box> 
          <Box
            fontSize={15}
            fontWeight={500}
            color={isCurrentPath ? linkActiveColor : linkColor}
            _hover={{
              textDecoration: 'none',
              color: linkActiveColor,
            }}
            cursor="pointer"
          >  
          
            {children ? (<Text fontSize="lg"  color={'white'} >
               {label}
            </Text>) : (
              label==='MINT'? <Link href="https://www.cootiesv2.xyz/">
              <a target="_blank">
              <Text fontSize="lg"  color={'white'} >
                {label}
             </Text>
              </a>
            </Link>: label==='MARKET'?<Link href="https://cootiemart.io/">
              <a target="_blank">
              <Text fontSize="lg"  color={'white'} >
                {label}
             </Text>
              </a>
            </Link>:label==='DELEGATE'?<Link href="https://cootieftso.xyz/">
              <a target="_blank">
              <Text fontSize="lg"  color={'white'} >
                {label}
             </Text>
              </a>
            </Link>:label==='DOCS'?<Link href="https://docs.cootiedocs.xyz/">
              <a target="_blank">
              <Text fontSize="lg"  color={'white'} >
                {label}
             </Text>
              </a>
            </Link>:
              <NextLink href={href || '/'}>
                <Link2
                  _hover={{
                    textDecoration: 'none',
                  }}
                ><Text fontSize="lg"  color={'white'} >
                {label}
             </Text>
                </Link2>
              </NextLink>
            )}
          </Box>
        </Box>
      </PopoverTrigger>

      {children && (
        <PopoverContent border={0} boxShadow={'xl'} p={4} rounded={'xl'} minW={'sm'}>
          <Stack>
            {children.map((child) => (
              <SubNav key={child.label} {...child} />
            ))}
          </Stack>
        </PopoverContent>
      )}
    </Popover>
  );
};

export default NavItem;
