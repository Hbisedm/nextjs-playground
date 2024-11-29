"use client"
import { useRouter } from "next/navigation";
import { AiOutlineCaretLeft } from "react-icons/ai";

export function BackButton() {
  const router = useRouter();
  return   <AiOutlineCaretLeft onClick={() => router.back()} className="text-2xl text-blue-500" />
}