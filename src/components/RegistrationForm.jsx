import React, { useMemo, useState } from "react";

const INITIAL = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function validate(data) {
  const errors = {};

  if (!data.username.trim()) errors.username = "이름";
  if (!data.email.trim()) errors.email = "Email";
  else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) errors.email = "Email 형식 이상";
  }

  if (!data.password) errors.password = "Password";
  else if (data.password.length < 8) errors.password = "8자 이상";

  if (!data.confirmPassword) errors.confirmPassword = "Confirm";
  else if (data.confirmPassword !== data.password)
    errors.confirmPassword = "비밀번호 불일치";

  return errors;
}

export default function RegistrationForm() {
  const [formData, setFormData] = useState(INITIAL);

  const errors = useMemo(() => validate(formData), [formData]);
  const isValid = Object.keys(errors).length === 0;

  // 각 필드 개별 업데이트
  const handleChange = (field) => (e) => {
    const value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // 전체 리셋
  const reset = () => setFormData(INITIAL);

  
  const submit = () => {
    if (!isValid) {
      console.log("제출 실패:", errors);
      return;
    }
    console.log("제출 성공:", formData);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <h2>Registration Form</h2>

      <input
        value={formData.username}
        onChange={handleChange("username")}
        placeholder="Username"
      />
      {errors.username && <div>{errors.username}</div>}

      <input
        value={formData.email}
        onChange={handleChange("email")}
        placeholder="Email"
      />
      {errors.email && <div>{errors.email}</div>}

      <input
        type="password"
        value={formData.password}
        onChange={handleChange("password")}
        placeholder="Password"
      />
      {errors.password && <div>{errors.password}</div>}

      <input
        type="password"
        value={formData.confirmPassword}
        onChange={handleChange("confirmPassword")}
        placeholder="Confirm Password"
      />
      {errors.confirmPassword && <div>{errors.confirmPassword}</div>}

      <div style={{ marginTop: 10 }}>
        <button type="button" onClick={reset}>
          Reset
        </button>
        <button type="button" onClick={submit} style={{ marginLeft: 8 }}>
          Submit
        </button>
      </div>

      <div style={{ marginTop: 10 }}>유효성 : {String(isValid)}</div>
    </form>
  );
}
