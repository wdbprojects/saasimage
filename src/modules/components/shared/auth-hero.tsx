import { routes } from "@/config/routes";
import { ImageIcon, Sparkles, Target, Zap } from "lucide-react";
import Link from "next/link";
import React from "react";

const AuthHero = () => {
  return (
    <div className="relative hidden overflow-hidden bg-linear-to-br from-slate-900 via-blue-900 to-slate-800 py-8 lg:flex">
      <div className="bg-grid-white/[0.1] bg-size[size:30px_30px] absolute inset-0" />
      <div className="relative z-10 flex flex-col justify-between space-y-8 px-8 xl:px-12">
        {/* LOGO */}
        <Link href={routes.home} className="flex items-center gap-3">
          <div className="flex size-8 items-center justify-center rounded-xl border border-blue-400/30 bg-blue-500/20 backdrop-blur-sm">
            <Sparkles className="size-4 text-blue-300" />
          </div>
          <span className="text-3xl font-semibold text-blue-50">
            AI Image Editor
          </span>
        </Link>
        {/* HERO CONTENT */}
        <div className="max-w-md">
          <h1 className="mb-6 text-2xl leading-tight font-bold text-blue-50 xl:text-3xl">
            Transform Images with{" "}
            <span className="text-blue-200">AI Magic</span>
          </h1>
          <p className="mb-8 text-base leading-normal text-blue-100/90">
            Join thousands of creators using advanced AI to edit, enhance, and
            perfect their images in seconds.
          </p>
          {/* Feature List */}
          <div className="space-y-4">
            {[
              {
                icon: ImageIcon,
                text: "AI Background Removal",
                color:
                  "bg-emerald-500/20 border-emerald-400/30 text-emerald-300",
              },
              {
                icon: Zap,
                text: "Lightning Fast Processing",
                color: "bg-amber-500/20 border-amber-400/30 text-amber-300",
              },
              {
                icon: Target,
                text: "Professional Quality Results",
                color: "bg-purple-500/20 border-purple-400/30 text-purple-300",
              },
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div
                  className={`flex size-8 items-center justify-center rounded-lg border backdrop-blur-sm ${feature.color}`}
                >
                  <feature.icon className="size-4" />
                </div>
                <span className="text-sm font-medium text-blue-100">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* BOTTOM STATS */}
        <div className="mt-4 grid grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-200">10K+</div>
            <div className="text-sm text-blue-300/70">Images Processed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-200">2.5K+</div>
            <div className="text-sm text-blue-300/70">Happy Users</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-amber-300">4.8★</div>
            <div className="text-sm text-blue-300/70">Rating</div>
          </div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 h-32 w-32 rounded-full bg-blue-400/20 blur-3xl" />
        <div className="absolute right-32 bottom-20 h-24 w-24 rounded-full bg-purple-400/15 blur-2xl" />
        <div className="absolute top-1/2 right-10 h-16 w-16 rounded-full bg-emerald-400/20 blur-xl" />
      </div>
    </div>
  );
};

export default AuthHero;
