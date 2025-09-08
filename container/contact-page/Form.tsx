"use client";
import Link from "next/link";
import { RoundButton } from "@/components";

// ===== Reusable Components =====

// Label/heading component
function FormLabel({ children }) {
  return (
    <h2 className="sub-heading font-NeueMontreal font-normal text-secondry text-sm sm:text-base">
      {children}
    </h2>
  );
}

// Input component
function FormInput({ placeholder }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="paragraph w-full font-NeueMontreal font-normal text-secondry bg-background border-b border-[#21212155] focus:border-secondry text-center sm:text-left outline-none mt-5 p-2 rounded-sm transition duration-200 ease-in-out text-sm sm:text-base"
    />
  );
}

// Button component
function FormButton({ href = "/", title = "Send Inquiry" }) {
  return (
    <div className="w-fit flex items-center justify-between bg-secondry cursor-pointer rounded-full group">
      <RoundButton
        bgcolor="#212121"
        href={href}
        title={title}
        className="bg-white text-black px-6 py-2 text-sm sm:text-base rounded-full"
      />
    </div>
  );
}

// ===== Main Form Component =====
export default function Form() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-10 max-w-[800px] mx-auto">
      <div className="flex flex-col gap-6">

        {/* Name and Company */}
      
          <div className="flex flex-col ">
            <FormLabel>Your Name</FormLabel>
            <FormInput placeholder="Enter your name" />
          </div>
          <div className="flex flex-col ">
            <FormLabel>Company Name</FormLabel>
            <FormInput placeholder="Company name type here" />
          </div>
     

        {/* Goal */}
        <div className="flex flex-col">
          <FormLabel>Goal</FormLabel>
          <FormInput placeholder="Your goal type here" />
        </div>

        {/* Completion Date */}
        <div className="flex flex-col">
          <FormLabel>Completion Date</FormLabel>
          <FormInput placeholder="Date" />
        </div>

        {/* Budget */}
        <div className="flex flex-col">
          <FormLabel>Budget</FormLabel>
          <FormInput placeholder="Select" />
        </div>

        {/* Contact Email */}
        <div className="flex flex-col">
          <FormLabel>Email</FormLabel>
          <FormInput placeholder="name@example.com" />
        
        </div>

        {/* Optional Details */}
        <div className="flex flex-col">
          <FormLabel>Additional Detail</FormLabel>
          <FormInput placeholder="Product details type here..." />
        </div>

        {/* Checkbox & Button */}
        <div className="flex flex-col sm:flex-col xm:flex-col gap-6 pt-8">
          <div className="flex items-center gap-2">
            <input type="checkbox" className="w-6 h-6" />
            <p className="paragraph text-secondry font-NeueMontreal font-normal text-sm sm:text-base">
              I agree with the
            </p>
            <Link
              className="paragraph font-medium font-NeueMontreal text-secondry hover:underline text-sm sm:text-base"
              href="/privacy"
            >
              Privacy Policy
            </Link>
          </div>
          <FormButton />
        </div>
      </div>
    </section>
  );
}
