import pic1 from "./images/pic1.jpg";
function App() {
  return (
    <div className="w-full h-full">
      <div className="bg-gray-200 h-10 text-center w-full">
        <h2 className="pt-2">Our Navbar</h2>
      </div>
      <div className="h-30">
        <h1 className="text-center text-2xl pt-10">Our Mission</h1>
        <p className="text-center">
          Everything you need to know about this policy
        </p>
      </div>
      <div className="grid grid-cols-2 pt-6">
        <div className="h-full w-full ml-24">
          <p className="text-justify w-96 mt-5 ml-32">
            Alumni sit with students to share real-life experiences after
            graduation regarding job hunt, corporate life and graduate school
            applications. They share advices on how to take most advantage of
            undergraduate school to prepare for professional life.
          </p>
          <p className="text-justify w-96 ml-32">
            Alumni sit with students to share real-life experiences after
            graduation regarding job hunt, corporate life and graduate school
            applications. They share advices on how to take most advantage of
            undergraduate school to prepare for professional life.
          </p>
          <p className="text-justify w-96 mb-5 ml-32">
            Alumni sit with students to share real-life experiences after
            graduation regarding job hunt, corporate life and graduate school
            applications. They share advices on how to take most advantage of
            undergraduate school to prepare for professional life.
          </p>
        </div>
        <div className="grid grid-rows-2 mr-24">
          <div className="h-full w-full">
            <img
              src={pic1}
              className="w-96 mt-5 ml-5 shadow-lg shadow-gray-400"
            ></img>
          </div>
          <div className="h-full w-full">
            <p className="mt-10 ml-5 text-justify w-96">
              lumni sit with students to share real-life experiences after
              graduation regarding job hunt, corporate life and graduate school
              applications. They share advices on how to take most advantage of
              undergraduate school to prepare for professional life.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
