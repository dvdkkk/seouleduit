import React from 'react';
import { Phone, MapPin, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { handlePhoneClick, openApplicationUrl } from '../utils/navigation';

interface FastInquirySectionProps {
  onOpenApplication?: () => void;
}

export const FastInquirySection: React.FC<FastInquirySectionProps> = ({ onOpenApplication }) => {
  const handleApplyClick = () => {
    if (onOpenApplication) {
      onOpenApplication();
    } else {
      openApplicationUrl();
    }
  };

  return (
    <section id="fast-inquiry" className="bg-[#ffcc00] text-black py-16 md:py-24 relative overflow-hidden w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" distance={30}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* LEFT COLUMN: Catchy Banner Text & Contact Details */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/10 border border-black/15 text-black text-xs font-bold w-fit mb-4">
                <Sparkles className="w-4 h-4 text-black" />
                <span>국비지원 100% 무료 맞춤 컨설팅</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black leading-[1.25] tracking-tight mb-6">
                망설이지 마세요.<br />
                국비교육 전문가가<br />
                친절하게 안내해드립니다.
              </h2>

              <p className="text-base sm:text-lg font-bold text-black/90 leading-relaxed mb-10">
                국비지원 자격 여부부터 취업 및 교육과정까지<br />
                <span className="underline decoration-2 underline-offset-4 decoration-black">
                  무료로 상담해드립니다.
                </span>
              </p>

              {/* Info Contact List */}
              <div className="space-y-6 mb-8">
                {/* Phone Block */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-black text-[#ffcc00] flex items-center justify-center shrink-0 shadow-md">
                    <Phone className="w-6 h-6 fill-[#ffcc00]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-black/70 block">교육문의</span>
                    <a
                      href="tel:1661-8126"
                      onClick={handlePhoneClick}
                      className="text-2xl sm:text-3xl font-black text-black tracking-tight hover:opacity-80 transition-opacity cursor-pointer inline-flex items-center gap-2"
                      title="전화 문의 (PC 클릭 시 상담신청 이동)"
                    >
                      <span>1661-8126</span>
                    </a>
                  </div>
                </div>

                {/* Way / Campus Block */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-black text-[#ffcc00] flex items-center justify-center shrink-0 shadow-md">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-black/70 block">교육방식</span>
                    <p className="text-lg sm:text-xl font-extrabold text-black tracking-tight">
                      100% 오프라인 (서울)
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base font-extrabold text-black/80 mt-2">
                여러분의 꿈을 응원합니다!
              </p>
            </div>

            {/* RIGHT COLUMN: Redesigned Consultation Action Card placed side-by-side with Left Column */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <div
                id="fast-inquiry-form"
                className="w-full max-w-xl bg-[#0a0b0d] text-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-black/20 flex flex-col justify-between relative overflow-hidden"
              >
                {/* Ambient glow accent inside card */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#ffcc00]/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ffcc00]/15 border border-[#ffcc00]/30 text-[#ffcc00] text-xs font-black tracking-wider uppercase mb-5">
                    <Sparkles className="w-4 h-4 text-[#ffcc00]" />
                    <span>ONLINE CONSULTATION</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug mb-3">
                    지금 바로 온라인으로<br />
                    <span className="text-gradient-gold">빠르고 간편하게 상담신청</span>하세요
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-300 font-medium leading-relaxed mb-6">
                    내일배움카드 발급 지원부터 맞춤형 IT 취업 로드맵, 최대 월 80만원 훈련장려금까지 전문 상담사가 1:1로 친절하게 안내해 드립니다.
                  </p>

                  {/* Highlights checklist */}
                  <div className="space-y-3 mb-8 bg-[#161822] p-4 sm:p-5 rounded-2xl border border-white/10">
                    {[
                      '1분이면 신청 완료되는 간편 온라인 상담 신청',
                      '전공자/비전공자 맞춤 1:1 진로 & 취업 컨설팅',
                      '국민내일배움카드 수강료 100% 무료 지원 여부 조회',
                      '매월 최대 80만원 훈련장려금 수령 자격 안내'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-gray-200">
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#ffcc00] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Primary Consultation Action Button */}
                <div className="relative z-10 pt-2">
                  <button
                    type="button"
                    onClick={handleApplyClick}
                    className="w-full py-4 sm:py-5 px-8 rounded-2xl bg-gradient-to-r from-[#ffcc00] via-[#ffd633] to-[#ffaa00] hover:from-yellow-300 hover:to-amber-300 text-black font-black text-base sm:text-xl tracking-tight shadow-[0_0_30px_rgba(255,204,0,0.35)] hover:shadow-[0_0_40px_rgba(255,204,0,0.6)] active:scale-[0.98] transition-all flex items-center justify-center gap-3 border border-yellow-200 cursor-pointer group"
                  >
                    <span>상담신청하기</span>
                    <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                  </button>

                  <p className="text-center text-[11px] sm:text-xs text-gray-400 mt-3 font-medium">
                    * 버튼 클릭 시 네이버 예약·상담신청 페이지로 바로 연결됩니다.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
