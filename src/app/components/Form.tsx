"use client";

import { ChangeEvent, useState } from "react";

interface FormData {
  text1: string;
  text2: string;
  price: string;
}

export const Form = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    text1: "",
    text2: "",
    price: "",
  });

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="mx-auto max-w-md">
      {preview && (
        <div className="m-4">
          <img src={preview} alt="Preview" className="h-1/2 w-1/2 rounded-lg" />
        </div>
      )}
      <input
        type="file"
        onChange={handleFileChange}
        className="mt-2 block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:outline-none"
      />

      <input
        type="text"
        name="text1"
        placeholder="Förening, Universitet"
        value={formData.text1}
        onChange={handleInputChange}
        className="mt-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:outline-none focus:ring focus:ring-slate-500"
      />
      <input
        type="text"
        name="text2"
        placeholder="Halarmärke namn"
        value={formData.text2}
        onChange={handleInputChange}
        className="mt-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:outline-none focus:ring focus:ring-slate-500"
      />
      <div className="flex flex-row justify-between">
        <input
          type="number"
          name="price"
          placeholder="Pris"
          value={formData.price}
          min={0}
          onChange={handleInputChange}
          className="mt-2 block w-1/2 rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:outline-none focus:ring focus:ring-slate-500"
        />

        <button className="mt-2 rounded-lg bg-rose-600 px-4 py-2 text-white hover:bg-rose-800">
          Upload
        </button>
      </div>
    </div>
  );
};
