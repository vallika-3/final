import React, { useState } from "react";

function ReportForm() {
  const [formData, setFormData] = useState({
    category: "Doping",
    description: "",
    attachments: [],
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    setFormData({ ...formData, attachments: [...formData.attachments, ...files] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className="bg-white min-h-screen py-8">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold text-[#203c5c] mb-4">Whistleblower Reporting Channel</h1>
        <p className="text-[#203c5c] mb-8">
          If you have credible information regarding any suspected doping activities, please use this secure channel to report it.
        </p>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-6">
            <label htmlFor="category" className="block text-[#203c5c] text-sm font-semibold mb-2">
              Report Category
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="shadow-md border rounded w-full py-2 px-3 text-[#203c5c] leading-tight focus:outline-none focus:ring-2 focus:ring-[#203c5c]"
            >
              <option value="Doping">Doping</option>
            </select>
          </div>
          <div className="mb-6">
            <label htmlFor="description" className="block text-[#203c5c] text-sm font-semibold mb-2">
              Additional Information
            </label>
            <textarea
              id="description"
              name="description"
              rows="6"
              value={formData.description}
              onChange={handleChange}
              placeholder="Provide as much detail as possible. Be specific and descriptive."
              className="shadow-md border rounded w-full py-2 px-3 text-[#203c5c] leading-tight focus:outline-none focus:ring-2 focus:ring-[#203c5c]"
            ></textarea>
          </div>
          <div className="mb-6">
            <label htmlFor="attachments" className="block text-[#203c5c] text-sm font-semibold mb-2">
              Attachments (Optional)
            </label>
            <input
              type="file"
              id="attachments"
              name="attachments"
              multiple
              onChange={handleFileChange}
              className="shadow-md border rounded w-full py-2 px-3 text-[#203c5c] leading-tight focus:outline-none focus:ring-2 focus:ring-[#203c5c]"
            />
          </div>
          <div className="mb-6">
            <button
              type="submit"
              className="bg-[#203c5c] hover:bg-[#2c577a] text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-[#2c577a]"
            >
              Submit Report
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ReportForm;