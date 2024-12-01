import express, { Express, Request, Response, NextFunction } from "express";

interface SDKOptions {
  app: Express;
}

const init = (options: SDKOptions) => {
  const app = express();

  // 미들웨어 설정
  app.use(express.json()); // JSON 요청 본문 파싱

  // 기본 라우트 설정 (예시)
  app.get("/ws", (req: Request, res: Response) => {
    res.send("Hello, SDK is initialized!");
  });

  // 필요한 엔드포인트들:
  app.get("/ws", (req: Request, res: Response) => {
    res.send("Hello, SDK is initialized!");
  });
  // app.post("/ws/auth/register"); // 회원가입
  // app.post("/ws/auth/login"); // 로그인
  // app.post("/ws/auth/logout"); // 로그아웃
  // app.get("/ws/auth/me"); // 현재 사용자 정보

  return { app };
};
export { init };
