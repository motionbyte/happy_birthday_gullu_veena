import { useNavigate } from 'react-router-dom'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import IconButton from '@mui/material/IconButton'
import { Hotel as HotelIcon, Map as MapIcon, MailOutline as MailIcon, Close as CloseIcon } from '@mui/icons-material'
import { Box } from '@mui/material'
import jaipurImg from '@/assets/jaipur.png'

export type MenuProps = {
  open: boolean
  onClose: () => void
  onHotelInfoClick?: () => void
  onExtendedTravelClick?: () => void
  onMessageUsClick?: () => void
}

const DRAWER_WIDTH = 280

export function Menu({ open, onClose, onHotelInfoClick, onExtendedTravelClick, onMessageUsClick }: MenuProps) {
  const navigate = useNavigate()

  const handleHotelClick = () => {
    onClose()
    onHotelInfoClick?.()
    navigate('/hotel-information')
  }
  const handleTravelClick = () => {
    onClose()
    onExtendedTravelClick?.()
    navigate('/extended-travel')
  }

  const handleJaipurClick = () => {
    onClose()
    navigate('/')
  }

  const handleMessageClick = () => {
    onClose()
    onMessageUsClick?.()
    navigate('/message-us')
  }

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      slotProps={{
        paper: {
          sx: {
            width: DRAWER_WIDTH,
            maxWidth: '85vw',
            boxSizing: 'border-box',
            height: '100%',
            maxHeight: '100vh',
            top: 0,
            borderTopLeftRadius: 12,
            borderBottomLeftRadius: 12,
            boxShadow: '-4px 0 28px rgba(45, 35, 24, 0.1)',
            /* Pastel sky blue glass — matches site --sky feel */
            backgroundColor: 'rgba(204, 224, 235, 0.55)',
            borderLeft: '1px solid rgba(255, 255, 255, 0.55)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
          },
        },
        backdrop: {
          sx: {
            backgroundColor: 'rgba(120, 150, 170, 0.22)',
            backdropFilter: 'blur(5px)',
            WebkitBackdropFilter: 'blur(5px)',
          },
        },
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', pt: 2, px: 1.5, pb: 2 }} role="presentation">
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 1, mb: 2 }}>
          <Box
            component="img"
            src={jaipurImg}
            alt="Jaipur"
            role="button"
            tabIndex={0}
            onClick={handleJaipurClick}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleJaipurClick() } }}
            sx={{ height: 36, width: 'auto', objectFit: 'contain', cursor: 'pointer' }}
            aria-label="Go to home"
          />
          <IconButton onClick={onClose} aria-label="Close menu" size="small" sx={{ ml: 0.5, color: '#3d5a6e' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List disablePadding sx={{ flex: 1 }}>
          <ListItemButton
            onClick={handleHotelClick}
            sx={{
              borderRadius: 2,
              mx: 1,
              mb: 0.5,
              color: 'var(--warm)',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.45)',
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: 40 }}>
              <HotelIcon sx={{ color: '#3d5a6e' }} />
            </ListItemIcon>
            <ListItemText primary="Hotel Information" primaryTypographyProps={{ fontWeight: 500, color: 'var(--warm)' }} />
          </ListItemButton>
          <ListItemButton
            onClick={handleTravelClick}
            sx={{
              borderRadius: 2,
              mx: 1,
              color: 'var(--warm)',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.45)',
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: 40 }}>
              <MapIcon sx={{ color: '#3d5a6e' }} />
            </ListItemIcon>
            <ListItemText primary="Extended Travel" primaryTypographyProps={{ fontWeight: 500, color: 'var(--warm)' }} />
          </ListItemButton>
          <ListItemButton
            onClick={handleMessageClick}
            sx={{
              borderRadius: 2,
              mx: 1,
              color: 'var(--warm)',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.45)',
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: 40 }}>
              <MailIcon sx={{ color: '#3d5a6e' }} />
            </ListItemIcon>
            <ListItemText primary="Message to Us" primaryTypographyProps={{ fontWeight: 500, color: 'var(--warm)' }} />
          </ListItemButton>
        </List>
      </Box>
    </Drawer>
  )
}
