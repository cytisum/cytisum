import Image from 'next/image'
import Navbar from './components/navBar';
import ThreadContainer from './components/threadContainer';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ThreadGallery from './components/threadGallery';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <CssBaseline>
        <Container disableGutters={true} maxWidth={false}>
          <Navbar />
        </Container>
      </CssBaseline>
      <Container sx={{height: "1200px"}}>
        <ThreadGallery />
      </Container>
    </main>
  )
}
