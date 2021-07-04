import React from 'react';
import { render } from '@testing-library/react';
import Login from './login';

describe(`Login 페이지를 테스트 합니다`, () => {
  it(`카카오 로그인 버튼이 보여야 합니다.`, () => {
    const LABEL = `아이디`;
    const { getByText } = render(<Login />);
    const labelElement = getByText(new RegExp(LABEL, `i`));
    expect(labelElement).toBe(LABEL);
  });

  // it(`카카오 로그인 버튼 클릭 시 카카오 로그인 페이지로 화면이 전환되어야 합니다.`, () => {});
});
