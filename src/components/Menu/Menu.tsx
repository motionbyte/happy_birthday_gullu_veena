import { useNavigate } from 'react-router-dom'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import IconButton from '@mui/material/IconButton'
import { Hotel as HotelIcon, Map as MapIcon, Close as CloseIcon } from '@mui/icons-material'
import { Box } from '@mui/material'
import jaipurImg from '@/assets/jaipur.png'

export type MenuProps = {
  open: boolean
  onClose: () => void
  onHotelInfoClick?: () => void
  onExtendedTravelClick?: () => void
}

const DRAWER_WIDTH = 280

export function Menu({ open, onClose, onHotelInfoClick, onExtendedTravelClick }: MenuProps) {
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
            boxShadow: '-4px 0 24px rgba(0,0,0,0.08)',
            backgroundColor: 'rgba(255, 255, 255, 0.377)',
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',
          },
        },
        backdrop: {
          sx: {
            backgroundColor: 'rgba(0,0,0,0.18)',
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)',
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
          <IconButton onClick={onClose} aria-label="Close menu" size="small" sx={{ ml: 0.5 }}>
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
              '&:hover': {
                backgroundColor: 'rgba(45, 35, 24, 0.08)',
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: 40 }}>
              <HotelIcon sx={{ color: 'primary.main' }} />
            </ListItemIcon>
            <ListItemText primary="Hotel Information" primaryTypographyProps={{ fontWeight: 500 }} />
          </ListItemButton>
          <ListItemButton
            onClick={handleTravelClick}
            sx={{
              borderRadius: 2,
              mx: 1,
              '&:hover': {
                backgroundColor: 'rgba(45, 35, 24, 0.08)',
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: 40 }}>
              <MapIcon sx={{ color: 'primary.main' }} />
            </ListItemIcon>
            <ListItemText primary="Extended Travel" primaryTypographyProps={{ fontWeight: 500 }} />
          </ListItemButton>
        </List>
      </Box>
    </Drawer>
  )
}
