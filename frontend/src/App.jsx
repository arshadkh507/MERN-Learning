import { Route, Routes, Navigate } from "react-router-dom";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UserPlaces from "./places/pages/UserPlaces";

const App = () => {
  return (
    <>
      <MainNavigation />
      <main className="mt-20">
        <Routes>
          <Route path="/" element={<h1>Home Page: Let&apos;s start</h1>} />
          <Route path="/users" element={<Users />} />
          <Route path="/places/new" element={<NewPlace />} />
          <Route path="/:userId/places" element={<UserPlaces />} />

          {/* ! Redirect */}
          {/* <Route path="*" element={<h1>NOT FOUND! THIS PAGE</h1>} /> */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
