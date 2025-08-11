import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate  } from "react-router-dom";

const ScreenAbout: React.FC = () => {
  const navigate = useNavigate ();
  return (
    <>
      <h1 className=" text-center">О нас</h1>
      <p>
        Используйте утилиты justify-content в контейнерах flexbox, чтобы
        изменить выравнивание элементов Флекс по главной оси (ось x для начала,
        ось y, если flex-direction: column). Выберите start (по умолчанию в
        браузере), end, center, between, around или evenly.
      </p>
      <Button variant="primary" onClick={() => navigate('/')}>
        Обратно к списку дел
      </Button>
    </>
  );
};
export default ScreenAbout;
