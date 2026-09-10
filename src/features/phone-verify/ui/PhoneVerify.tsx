"use client";

import { useState } from "react";
import Icon from "@/shared/ui/Icon";
import Button from "@/shared/ui/Button";

export default function PhoneVerify({
  phone,
  onPhoneChange,
  verified,
  onVerified,
}: {
  phone: string;
  onPhoneChange: (v: string) => void;
  verified: boolean;
  onVerified: (v: boolean) => void;
}) {
  const [sent, setSent] = useState(false);
  const [code, setCode] = useState("");

  return (
    <div>
      <label className="mb-1.5 block text-body-s font-semibold text-fg-2">
        휴대폰 번호 <span className="text-danger">*</span>
      </label>
      <div className="flex gap-2">
        <input
          type="tel"
          value={phone}
          onChange={(e) => {
            onPhoneChange(e.target.value);
            onVerified(false);
            setSent(false);
          }}
          placeholder="'-' 없이 숫자만 입력"
          disabled={verified}
          className="w-full rounded-small border border-border-default px-3 py-2.5 text-body-s outline-none focus:border-primary-50 focus:ring-2 focus:ring-primary-10 disabled:bg-bg-subtle disabled:text-fg-4"
        />
        <Button type="button" size="s" disabled={verified || phone.length < 10} onClick={() => setSent(true)} className="shrink-0 text-body-xs">
          인증번호 받기
        </Button>
      </div>

      {sent && !verified && (
        <div className="mt-2 flex gap-2">
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="인증번호 6자리 (예시: 123456)"
            className="w-full rounded-small border border-border-default px-3 py-2.5 text-body-s outline-none focus:border-primary-50 focus:ring-2 focus:ring-primary-10"
          />
          <Button type="button" size="s" disabled={code.length < 4} onClick={() => onVerified(true)} className="shrink-0 text-body-xs">
            인증확인
          </Button>
        </div>
      )}
      {sent && !verified && (
        <p className="mt-1.5 text-body-xs text-fg-3">알림톡으로 인증번호가 발송되었습니다. (프로토타입: 임의 값 입력 가능)</p>
      )}
      {verified && (
        <p className="mt-1.5 flex items-center gap-1 text-body-xs font-semibold text-success">
          <Icon name="check" className="h-3.5 w-3.5" /> 휴대폰 인증이 완료되었습니다.
        </p>
      )}
    </div>
  );
}
