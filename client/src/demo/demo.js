// demo descpition Products APi

// const message = [
//     {
//       value: [
//         {
//           text: "Intel Core i5 Raptor Lake - 13420H"
//         },
//         {
//           text:"NVIDIA GeForce RTX 2050 4 GB"
//         }
//       ],
//       title: [
//         {
//           descpition: "Những mẫu laptop Aspire Gaming chắc chắn đã quá quen thuộc với anh em nhờ hiệu năng mạnh mẽ nhưng lại được gắn với mác giá vô cùng hợp lý. Với mẫu Acer Aspire 5 Gaming vào năm 2023 này chắc chắn sẽ không làm mọi người thất vọng với cũng giá đó nhưng hiệu năng có phần được nâng lên nữa.",
//         },
//         {
//           descpition: "Laptop được trang bị bộ vi xử lý Intel Core i5 Raptor Lake - 13420H cùng card rời NVIDIA GeForce RTX 2050 4 GB đa nhiệm hiệu quả cho mình mọi công việc trên cơ quan, học tập hay giải trí thường ngày đến việc thực hiện các bản thiết kế trên nền tảng Premiere, Photoshop,... tuy nhiên với các ấn phẩm nghệ thuật, đồ hoạ động quá nhiều layer hay effect thì mình đánh giá máy chưa đáp ứng được nhanh chóng, nếu chỉ sử dụng cho công việc thông thường thôi thì vẫn rất ok nha.",
//           img: "https://cdn.tgdd.vn/Products/Images/44/314630/acer-aspire-5-a515-58gm-51lb-i5-nxkq4sv002-asc-7.jpg"
//         },
//         {
//           descpition: "Một điểm mà chắc chắn mọi người cũng khá quan tâm trên mẫu máy này là khả năng chơi các tựa game. Theo như mình nhìn nhận thì tốc độ đáp ứng các tựa game Online/Esports như PUBG, LOL, Valorant, FO khá tốt, hầu hết mọi tựa game đều có mức FPS ổn định và chơi trong thời gian dài thì hiệu suất hoạt động vẫn được duy trì bền bỉ."
//         }
//       ]
//     }
//   ]

//   const mess = () =>{
//   return new Promise((res, rej) => {
//     message.map((mes) => {
//       res(mes.title)
//     })
//   })}

//   mess()
//   .then((res) => res.map((mes) => mes.descpition))
//   .then((res) =>res.map((mes) => mes))
//   .then((res) => console.log(res))



import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  return (
    <div className="container">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )}

      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.username}</p>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>
          <button className="fluid ui button blue">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;