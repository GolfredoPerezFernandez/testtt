import { Box } from '@chakra-ui/react';
import { Typography } from '@web3uikit/core';

const Footer = () => {
  return (
    <Box textAlign={'center'} marginTop={'40px'} paddingRight={'30px'} flexDirection={'column'} w="90%" p={6}>
    <Typography color={'white'} variant="H2">Cootie Finance cannot and does not contain financial advice. The information is provided for general informational and educational purposes only and is not a substitute for professional financial advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. We do not provide any kind of financial advice.</Typography>

      <Typography color={'white'} variant="H2">Copyright © 2023 TheCooties. All Rights Reserved.</Typography>
    </Box>
  );
};

export default Footer;
