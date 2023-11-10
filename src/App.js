import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Signin from "./pages/auth/Signin";
import SignUp from "./pages/auth/SignUp";
import Forgetpass from "./pages/auth/Forgetpass";
import RecoverPass from "./pages/auth/RecoverPass";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminAllStudent from "./pages/admin/student/AdminAllStudent";
import AdminStudent from "./pages/admin/student/AdminStudent";
import AllExam from "./pages/admin/exam/AllExam";
import CreateExam from "./pages/admin/exam/CreateExam";
import ExamActive from "./pages/admin/exam/ExamActive";
import ExamDeactive from "./pages/admin/exam/ExamDeactive";
import ExamDelete from "./pages/admin/exam/ExamDelete";
import QuestionAdd from "./pages/admin/question/QuestionAdd";
import QuestionAll from "./pages/admin/question/QuestionAll";
import QuestionDelete from "./pages/admin/question/QuestionDelete";
import AnswerAdd from "./pages/admin/answer/AnswerAdd";
import AllTrack from "./pages/admin/track/AllTrack";
import AddTrack from "./pages/admin/track/AddTrack";
import RemoveTrack from "./pages/admin/track/RemoveTrack";
import CourseAll from "./pages/admin/course/CourseAll";
import CourseDelete from "./pages/admin/course/CourseDelete";
import AddCourse from "./pages/admin/course/AddCourse";
import ShowVideo from "./pages/admin/video/ShowVideo";
import Addvideo from "./pages/admin/video/Addvideo";
import Delete from "./pages/admin/video/Delete";
import ShowActivities from "./pages/admin/activities/ShowActivities";
import AddActivity from "./pages/admin/activities/AddActivity";
import ActDelete from "./pages/admin/activities/ActDelete";
import Libraryes from "./pages/admin/library/Libraryes";
import DeleteLibrary from "./pages/admin/library/DeleteLibrary";
import AddLibrary from "./pages/admin/library/AddLibrary";
// import Logout from "./components/auth/Logout";
import Home from "./pages/user/Home";
import PreExam from "./pages/user/PreExam";
import PreExamD from "./pages/user/PreExamD";
import UserFirstTimepage from "./pages/user/UserFirstTimepage";
import Choose from "./pages/user/Choose";
import PreExamResult from "./pages/user/PreExamResult";
import ShowTrack2D from "./pages/track/ShowTrack2D";
import ShowTrack3D from "./pages/track/ShowTrack3D";
import Enroll from "./pages/track/Enroll";
import Signout from "./pages/Signout";
import CourseTrack from "./pages/admin/track/CourseTrack";
import CourseDetails from "./pages/admin/course/CourseDetails";
import Video from "./pages/admin/video/Video";
import StudentCourse from "./pages/user/StudentCourse";
import ShowVideoUser from "./components/user/ShowVideoUser";
// import { Helmet } from "react-helmet";
// import useScript from "./hooks/useScript";
const App = () => {
  // useScript("js/jsapp.js");
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgetPassword" element={<Forgetpass />} />
        <Route path="/logout" element={<Signout />} />
        <Route path="/newpassword/:code" element={<RecoverPass />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/student/all" element={<AdminAllStudent />} />
        <Route path="/admin/student/:studentid" element={<AdminStudent />} />
        <Route path="/admin/exam" element={<AllExam />} />
        <Route path="/admin/exam/create" element={<CreateExam />} />
        <Route path="/admin/examactive/:examid" element={<ExamActive />} />
        <Route path="/admin/examdeactive/:examid" element={<ExamDeactive />} />
        <Route path="/admin/examdelete/:examid" element={<ExamDelete />} />
        <Route path="/admin/question/add/:examid" element={<QuestionAdd />} />
        <Route path="/admin/questions/:examid" element={<QuestionAll />} />
        <Route
          path="/admin/question/delete/:qid"
          element={<QuestionDelete />}
        />
        <Route path="/admin/answer/add/:qid" element={<AnswerAdd />} />
        <Route path="/admin/track" element={<AllTrack />} />
        <Route path="/admin/track/add" element={<AddTrack />} />
        <Route path="/admin/track/:trackid" element={<RemoveTrack />} />
        <Route path="/admin/courses" element={<CourseAll />} />
        <Route path="/admin/track/course/:tid" element={<CourseTrack />} />
        <Route path="/admin/course/details/:cid" element={<CourseDetails />} />
        <Route path="/admin/course/:cid" element={<CourseDelete />} />

        <Route path="/admin/course/add/:trackid" element={<AddCourse />} />
        <Route path="/admin/video/all" element={<ShowVideo />} />
        <Route path="/admin/video/add" element={<Addvideo />} />
        <Route path="/admin/video/delete/:vid" element={<Delete />} />
        <Route path="/admin/course/video/show/:vid" element={<Video />} />
        <Route path="/admin/activities" element={<ShowActivities />} />
        <Route path="/admin/activity/add" element={<AddActivity />} />
        <Route path="/admin/active/delete/:actid" element={<ActDelete />} />
        <Route path="/admin/library" element={<Libraryes />} />
        <Route
          path="/admin/library/delete/:libid"
          element={<DeleteLibrary />}
        />
        <Route path="/admin/library/add" element={<AddLibrary />} />
        <Route path="/home" element={<Home />} />
        <Route path="/firsttime" element={<UserFirstTimepage />} />
        <Route path="/choose" element={<Choose />} />
        <Route path="/preexam2d" element={<PreExam />} />
        <Route path="/preexam3d" element={<PreExamD />} />
        <Route path="/prerxamresult/:archive" element={<PreExamResult />} />
        <Route path="/track/track2d" element={<ShowTrack2D />} />
        <Route path="/track/track3d" element={<ShowTrack3D />} />
        <Route path="/track/enroll/:trackid" element={<Enroll />} />
        <Route path="/course/:courid" element={<StudentCourse />} />
        <Route path="/show/video/:vid" element={<ShowVideoUser />} />
      </Routes>
    </div>
  );
};

export default App;
