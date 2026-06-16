"use client";

import { ChangeEvent, FormEvent, useMemo, useState } from "react";
import { categories } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const initialState = {
  productName: "",
  courseCode: "",
  professor: "",
  department: "",
  category: "",
  price: "",
  salePrice: "",
  description: "",
  tags: "",
  fileLink: "",
};

export function VendorUploadForm() {
  const [form, setForm] = useState(initialState);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const selectedCategory = useMemo(
    () => categories.find((category) => category.slug === form.category),
    [form.category],
  );

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
    setErrorMessage("");
    setSuccessMessage("");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (!form.productName.trim() || !form.courseCode.trim() || !form.description.trim() || !form.price.trim()) {
      setErrorMessage("Please complete the title, course code, description, and price fields.");
      return;
    }

    const priceValue = Number(form.price);
    if (Number.isNaN(priceValue) || priceValue <= 0) {
      setErrorMessage("Please provide a valid positive price.");
      return;
    }

    setSuccessMessage("Your item has been drafted successfully. Vendors can now review and publish it to the marketplace.");
    setForm(initialState);
  }

  return (
    <div className="rounded-4xl border border-white/10 bg-white/80 p-8 shadow-lg shadow-slate-900/5 backdrop-blur dark:bg-zinc-950/70">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h2 className="text-2xl font-semibold">Upload vendor materials</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Vendors can add new course materials directly from this page. Use the form to describe the digital asset, link to the file, and choose a category.
          </p>
        </div>

        <div className="space-y-4 rounded-3xl bg-muted/10 p-6 text-sm text-muted-foreground">
          <p className="font-semibold text-foreground">Vendor upload checklist</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Provide a descriptive title and course code.</li>
            <li>Choose the category that best matches the materials.</li>
            <li>Include a short description and an accessible file link.</li>
            <li>Set a price and optional sale price for student access.</li>
          </ul>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <Input
            name="productName"
            value={form.productName}
            onChange={handleChange}
            placeholder="Material title"
          />
          <Input
            name="courseCode"
            value={form.courseCode}
            onChange={handleChange}
            placeholder="Course code"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Input
            name="professor"
            value={form.professor}
            onChange={handleChange}
            placeholder="Professor / creator name"
          />
          <Input
            name="department"
            value={form.department}
            onChange={handleChange}
            placeholder="Department"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-sm text-muted-foreground">Category</span>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="flex h-11 w-full rounded-2xl border border-input bg-background px-4 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <option value="">Choose category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.slug}>{category.name}</option>
              ))}
            </select>
          </label>

          <div className="grid gap-4 sm:grid-cols-2">
            <Input
              name="price"
              value={form.price}
              onChange={handleChange}
              placeholder="Price"
              type="number"
              min="0"
              step="0.01"
            />
            <Input
              name="salePrice"
              value={form.salePrice}
              onChange={handleChange}
              placeholder="Sale price"
              type="number"
              min="0"
              step="0.01"
            />
          </div>
        </div>

        <label className="block">
          <span className="mb-2 block text-sm text-muted-foreground">Description</span>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows={5}
            placeholder="Describe the material, course focus, and any learning outcomes."
            className="flex w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            style={{ minHeight: 140 }}
          />
        </label>

        <Input
          name="tags"
          value={form.tags}
          onChange={handleChange}
          placeholder="Tags (comma separated)"
        />
        <Input
          name="fileLink"
          value={form.fileLink}
          onChange={handleChange}
          placeholder="File link or cloud upload URL"
          type="url"
        />

        {errorMessage ? <p className="text-sm text-red-500">{errorMessage}</p> : null}
        {successMessage ? <p className="text-sm text-foreground/90">{successMessage}</p> : null}

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Button type="submit" className="w-full sm:w-auto">Save draft</Button>
          <div className="text-sm text-muted-foreground">
            {selectedCategory ? `Selected category: ${selectedCategory.name}` : "No category selected yet."}
          </div>
        </div>
      </form>
    </div>
  );
}
