import { lazy } from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

const Contact = lazy(() => import('./pages/Contact'));
const Home = lazy(() => import('./pages/Home'));
const ProductEdit = lazy(() => import('./pages/ProductEdit'));
const ProductNew = lazy(() => import('./pages/ProductNew'));
const Products = lazy(() => import('./pages/Products'));
const SignIn = lazy(() => import('./pages/SignIn'));
const SignUp = lazy(() => import('./pages/SignUp'));
const ProtectRoute = lazy(() => import('./components/ProtectRoute'));
const RootLayout = lazy(() => import('./layout/RootLayout'));
const PassingProps = lazy(() => import('./learn/1-passing-props'));
const LiftingStateUp = lazy(() => import('./learn/2-lifting-state-up'));
const PropsDrillingIssue = lazy(() => import('./learn/3-props-drilling-issue'));
const ReactContextAPI1 = lazy(() => import('./learn/4-1-react-context-api'));
const ReactContextAPI2 = lazy(() =>
  import('./learn/4-2-seperation-react-context')
);
const RefExampleMemoValues = lazy(() => import('./learn/5-ref-memo-values'));
const RefExampleReferencingDOM = lazy(() =>
  import('./learn/6-ref-referencing-dom')
);
const GSAP_Animation = lazy(() => import('./learn/7-1-ref-gsap-animation'));
const GSAP_Context = lazy(() => import('./learn/7-2-ref-gsap-context'));
const FramerMotion_Animation = lazy(() => import('./learn/8-framer-motion'));
const ComponentPropTypes = lazy(() => import('./learn/9-component-prop-types'));
const LocalStorage = lazy(() => import('./learn/10-local-storage'));
const ReactContextIssue = lazy(() => import('./learn/11-context-problem'));
const ZustandLibrary = lazy(() => import('./learn/12-zustand-library'));
const DataFetchAndUX = lazy(() => import('./learn/13-data-fetch-and-ux'));
const TanStackQueryLibrary = lazy(() => import('./learn/14-tanstack-query'));
const PaginationQuery = lazy(() => import('./learn/15-pagination-query'));
const InfineteQuery = lazy(() => import('./learn/16-infinite-query'));
const Assets = lazy(() => import('./pages/Assets'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="products" element={<Products />} />
      <Route path="assets" element={<Assets />} />
      <Route
        path="product/new"
        element={
          <ProtectRoute>
            <ProductNew />
          </ProtectRoute>
        }
      />
      <Route
        path="product/edit/:productId"
        element={
          <ProtectRoute>
            <ProductEdit />
          </ProtectRoute>
        }
      />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<Home />} />

      {/* 학습 주제 */}
      <Route path="learn/01" element={<PassingProps />} />
      <Route path="learn/02" element={<LiftingStateUp />} />
      <Route path="learn/03" element={<PropsDrillingIssue />} />
      <Route path="learn/04/01" element={<ReactContextAPI1 />} />
      <Route path="learn/04/02" element={<ReactContextAPI2 />} />
      <Route path="learn/05" element={<RefExampleMemoValues />} />
      <Route path="learn/06" element={<RefExampleReferencingDOM />} />
      <Route path="learn/07/01" element={<GSAP_Animation />} />
      <Route path="learn/07/02" element={<GSAP_Context />} />
      <Route path="learn/08" element={<FramerMotion_Animation />} />
      <Route path="learn/09" element={<ComponentPropTypes />} />
      <Route path="learn/10" element={<LocalStorage />} />
      <Route path="learn/11" element={<ReactContextIssue />} />
      <Route path="learn/12" element={<ZustandLibrary />} />
      <Route path="learn/13" element={<DataFetchAndUX />} />
      <Route path="learn/14" element={<TanStackQueryLibrary />} />
      <Route path="learn/15" element={<PaginationQuery />} />
      <Route path="learn/16" element={<InfineteQuery />} />
    </Route>
  )
);

export default router;
