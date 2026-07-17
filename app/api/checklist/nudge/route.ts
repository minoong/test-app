import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { target } = body;

    if (!target) {
      return NextResponse.json({ error: 'Target is required' }, { status: 400 });
    }

    // 푸시 알림 모킹 처리 (1초 지연 후 성공 반환)
    await new Promise(resolve => setTimeout(resolve, 1000));

    // 실제 프로덕션에서는 여기서 target(가현/미누)의 푸시 토큰을 DB에서 조회한 뒤
    // APNs/FCM 또는 Web Push API 서버로 전송합니다.

    return NextResponse.json({ success: true, message: `푸시 알림 전송 완료 (${target})` });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
