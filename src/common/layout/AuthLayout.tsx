import { Box, Typography } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
interface Props {
    children: JSX.Element | JSX.Element[];
    title?: string;
    color?: boolean;
    sx?: any;
}
export const AuthLayout = ({ children, title = '', color = true, sx }: Props) => {
  return (
    <Box
      display="grid"
      justifyContent="center"
      alignItems="center"
      sx={{
        minHeight: '100vh',
        backgroundColor: color ? blueGrey : '',
        padding: 4,
      }}
    >
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: 4,
        }}
      >
        <img
          style={{ width: '100%' }}
          src="../gearth.png"
          alt="logo"
        />
      </Box>
      <Box
        sx={{
          width: { sm: 500 },
          ...sx,
        }}
      >
        {title !== '' && (
          <Typography className="text-center" variant="h4" sx={{ mb: 1 }}>
            {title}
          </Typography>
        )}
        {children}
      </Box>
    </Box>
  );
};