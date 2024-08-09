import { useRef, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import CategoryContent from './ULISeriesSelectionGuide/CategoryContent';
import CategoryButton from './ULISeriesSelectionGuide/CategoryButton';
import serialRepeaterIsolatorImage from '../images/webp/SerialRepeaterIsolator.webp';
import usbToSerialConverterImage from '../images/webp/USBtoSerialConverter.webp';
import serialToSerialConverterImage from '../images/webp/SerialtoSerialConverter.webp';
import USBHubIsolatorImage from '../images/webp/USBHubIsolator.webp';
import SerialtoFiberConverterImage from '../images/webp/SerialtoFiberConverter.webp';
import SurgeSuppressorDataSplitterTapImage from '../images/webp/SurgeSuppressorDataSplitterTap.webp';

function HomePage() {
  const location = useLocation(); // 取得當前路徑
  const navigate = useNavigate();
  const nodeRef = useRef(null);
  useEffect(() => {
    // 在組件加載時自動跳轉到指定路由
    if (location.pathname === '/') {
      navigate('/usb-to-serial-converter');
    }
  }, []);
  return (
    <div>
      <PageContainer>
        <GridWrapper>
          <CategoryTitle>ULI Series Selection Guide</CategoryTitle>
          <CategorySubtitle>2 Steps for Selecting the Right ULI</CategorySubtitle>
          <Grid>
            {categories.map((category) => (
              <CategoryButton key={category.route} {...category} />
            ))}
          </Grid>
        </GridWrapper>
        <SwitchTransition>
          <CSSTransition key={location.pathname} nodeRef={nodeRef} classNames="fade" timeout={200}>
            <StyledContent ref={nodeRef}>
              <StyledRoutesContainer>
                <Routes>
                  {categories.map((category) => (
                    <Route key={category.route} path={category.route} element={category.element} />
                  ))}
                </Routes>
              </StyledRoutesContainer>
            </StyledContent>
          </CSSTransition>
        </SwitchTransition>
      </PageContainer>
    </div>
  );
}

const categories = [
  {
    image: SerialtoFiberConverterImage,
    title: 'Serial to Fiber Converter',
    subtitle: 'ULI-210',
    route: '/serial-to-fiber-converter',
  },
  {
    image: serialToSerialConverterImage,
    title: 'Serial to Serial Converter',
    subtitle: 'ULI-220',
    route: '/serial-to-serial-converter',
  },
  {
    image: serialRepeaterIsolatorImage,
    title: 'Serial Repeater/Isolator',
    subtitle: 'ULI-230',
    route: '/serial-repeater-isolator',
  },
  {
    image: SurgeSuppressorDataSplitterTapImage,
    title: 'Surge Suppressor DataSplitter/Tap',
    subtitle: 'ULI-240/250/260',
    route: '/surge-suppressor-data-splitter-tap',
  },
  {
    image: usbToSerialConverterImage,
    title: 'USB to Serial Converter',
    subtitle: 'ULI-300',
    route: '/usb-to-serial-converter',
    element: <CategoryContent />,
  },
  {
    image: USBHubIsolatorImage,
    title: 'USB Hub/Isolator',
    subtitle: 'ULI-400',
    route: '/usb-hub-isolator',
  },
];

export default HomePage;

const CategoryTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: var(--primary-color);
`;
const CategorySubtitle = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: var(--second-text-color);
`;
const GridWrapper = styled.div`
  background-color: #fff;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledRoutesContainer = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 1rem 1rem;
`;
const PageContainer = styled.div`
  min-height: 100vh;
  background-color: var(--background-color);
`;

const StyledContent = styled.div`
  &.fade-enter {
    opacity: 0;
  }
  &.fade-enter-active {
    opacity: 1;
    transition: opacity 200ms ease-in;
  }
  &.fade-exit {
    opacity: 1;
  }
  &.fade-exit-active {
    opacity: 0;
    transition: opacity ease-in;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
  background-color: #fff;
  max-width: 1380px;
  margin: 0 auto;
  padding-bottom: 1rem;
  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;
