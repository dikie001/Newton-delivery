import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function RequestPickupForm() {
  const [formData, setFormData] = useState({
    senderName: "",
    senderPhone: "",
    pickupAddress: "",
    recipientName: "",
    recipientPhone: "",
    deliveryAddress: "",
    packageDescription: "",
    packageSize: "",
    preferredTime: "",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Request Pickup Submitted:", formData);
    alert("Request submitted!");
    setFormData({
      senderName: "",
      senderPhone: "",
      pickupAddress: "",
      recipientName: "",
      recipientPhone: "",
      deliveryAddress: "",
      packageDescription: "",
      packageSize: "",
      preferredTime: "",
      notes: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-6 bg-white/5 rounded-2xl backdrop-blur-md space-y-4"
    >
      <h2 className="text-2xl font-bold text-slate-50">Request a Pickup</h2>

      <div className="space-y-2">
        <Label>Sender Name</Label>
        <Input
          name="senderName"
          value={formData.senderName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="space-y-2">
        <Label>Sender Phone</Label>
        <Input
          name="senderPhone"
          value={formData.senderPhone}
          onChange={handleChange}
          required
        />
      </div>
      <div className="space-y-2">
        <Label>Pickup Address</Label>
        <Textarea
          name="pickupAddress"
          value={formData.pickupAddress}
          onChange={handleChange}
          required
        />
      </div>

      <div className="space-y-2">
        <Label>Recipient Name</Label>
        <Input
          name="recipientName"
          value={formData.recipientName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="space-y-2">
        <Label>Recipient Phone</Label>
        <Input
          name="recipientPhone"
          value={formData.recipientPhone}
          onChange={handleChange}
          required
        />
      </div>
      <div className="space-y-2">
        <Label>Delivery Address</Label>
        <Textarea
          name="deliveryAddress"
          value={formData.deliveryAddress}
          onChange={handleChange}
          required
        />
      </div>

      <div className="space-y-2">
        <Label>Package Description</Label>
        <Textarea
          name="packageDescription"
          value={formData.packageDescription}
          onChange={handleChange}
        />
      </div>
      <div className="space-y-2">
        <Label>Package Size / Weight</Label>
        <Input
          name="packageSize"
          value={formData.packageSize}
          onChange={handleChange}
        />
      </div>
      <div className="space-y-2">
        <Label>Preferred Pickup Time</Label>
        <Input
          name="preferredTime"
          type="datetime-local"
          value={formData.preferredTime}
          onChange={handleChange}
        />
      </div>
      <div className="space-y-2">
        <Label>Additional Notes</Label>
        <Textarea name="notes" value={formData.notes} onChange={handleChange} />
      </div>

      <Button type="submit" className="w-full mt-4">
        Submit Request
      </Button>
    </form>
  );
}
