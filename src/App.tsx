import './style/App.css';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { RootLayout } from './pages/RootLayout';
import { NotFound } from './pages/NotFound';
import { Suspense, lazy } from 'react';
import { Loading } from './components/Loading';

const Login = lazy(() => import('./pages/Login').then(module => ({default: module.Login})));
const Register = lazy(() => import('./pages/Register').then(module => ({default: module.Register})));
const MainLayout = lazy(() => import('./pages/MainLayout').then(module => ({default: module.MainLayout})));
const Home = lazy(() => import('./pages/Home').then(module => ({default: module.Home})));
const About = lazy(() => import('./pages/About').then(module => ({default: module.About})));
const Contact = lazy(() => import('./pages/Contact').then(module => ({default: module.Contact})));
const Rental = lazy(() => import('./pages/Rental').then(module => ({default: module.Rental})));
const Car = lazy(() => import('./pages/Car').then(module => ({default: module.Car})));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route path='login' element={
      <Suspense fallback={<Loading />}>
        <Login/>
      </Suspense>
      } />
      <Route path='register' element={
      <Suspense fallback={<Loading />}>
        <Register/>
      </Suspense>
      } />
      <Route path='/' element={
      <Suspense fallback={<Loading />}>
        <MainLayout />
      </Suspense>
      }>
        <Route index element={
        <Suspense fallback={<Loading />}>
          <Home/>
        </Suspense>
        } />
        <Route path='about' element={
        <Suspense fallback={<Loading />}>
          <About/>
        </Suspense>
        } />
        <Route path='contact' element={
        <Suspense fallback={<Loading />}>
          <Contact/>
        </Suspense>
        } />
        <Route path='rental' element={
        <Suspense fallback={<Loading />}>
          <Rental/>
        </Suspense>
        } />
        <Route path='car/:id' element={
          <Suspense fallback={<Loading />}>
            <Car />
          </Suspense>
        } />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
