"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, Lock, Camera, Bell, Shield } from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Toggle from "@/components/ui/Toggle";
import Badge from "@/components/ui/Badge";
import { useToastContext } from "@/components/providers/ToastProvider";
import { currentUser } from "@/data";

export default function SettingsPage() {
  const { addToast } = useToastContext();
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState({
    name: currentUser.name,
    email: currentUser.email,
  });
  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: "",
  });
  const [notifications, setNotifications] = useState({
    email: true,
    marketing: false,
    updates: true,
  });

  const handleSaveProfile = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    addToast("Profile updated successfully!");
    setLoading(false);
  };

  const handleChangePassword = async () => {
    if (passwords.new !== passwords.confirm) {
      addToast("Passwords do not match", "error");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    addToast("Password changed successfully!");
    setPasswords({ current: "", new: "", confirm: "" });
    setLoading(false);
  };

  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <div>
        <h1 className="font-display text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
          Settings
        </h1>
        <p className="mt-1 text-gray-600 dark:text-gray-400">
          Manage your account settings and preferences.
        </p>
      </div>

      {/* Profile */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <Card>
          <h2 className="mb-6 text-lg font-semibold text-gray-900 dark:text-white">
            Profile
          </h2>
          <div className="mb-6 flex items-center gap-6">
            <div className="relative">
              <img
                src={currentUser.avatar}
                alt={currentUser.name}
                className="h-20 w-20 rounded-full bg-gray-200"
              />
              <button className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-brand-600 text-white dark:border-gray-900">
                <Camera className="h-4 w-4" />
              </button>
            </div>
            <div>
              <p className="font-medium text-gray-900 dark:text-white">
                {currentUser.name}
              </p>
              <Badge variant="brand" className="mt-1 capitalize">
                {currentUser.plan} Plan
              </Badge>
            </div>
          </div>
          <div className="space-y-4">
            <Input
              label="Full Name"
              icon={<User className="h-4 w-4" />}
              value={profile.name}
              onChange={(e) =>
                setProfile({ ...profile, name: e.target.value })
              }
            />
            <Input
              label="Email"
              type="email"
              icon={<Mail className="h-4 w-4" />}
              value={profile.email}
              onChange={(e) =>
                setProfile({ ...profile, email: e.target.value })
              }
            />
            <Button onClick={handleSaveProfile} loading={loading}>
              Save Changes
            </Button>
          </div>
        </Card>
      </motion.div>

      {/* Password */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card>
          <h2 className="mb-6 text-lg font-semibold text-gray-900 dark:text-white">
            Change Password
          </h2>
          <div className="space-y-4">
            <Input
              label="Current Password"
              type="password"
              icon={<Lock className="h-4 w-4" />}
              value={passwords.current}
              onChange={(e) =>
                setPasswords({ ...passwords, current: e.target.value })
              }
            />
            <Input
              label="New Password"
              type="password"
              icon={<Lock className="h-4 w-4" />}
              value={passwords.new}
              onChange={(e) =>
                setPasswords({ ...passwords, new: e.target.value })
              }
            />
            <Input
              label="Confirm New Password"
              type="password"
              icon={<Lock className="h-4 w-4" />}
              value={passwords.confirm}
              onChange={(e) =>
                setPasswords({ ...passwords, confirm: e.target.value })
              }
            />
            <Button onClick={handleChangePassword} loading={loading}>
              Update Password
            </Button>
          </div>
        </Card>
      </motion.div>

      {/* Subscription */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
      >
        <Card>
          <h2 className="mb-6 text-lg font-semibold text-gray-900 dark:text-white">
            Subscription & Usage
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
              <p className="text-sm text-gray-500">Current Plan</p>
              <p className="text-lg font-semibold capitalize text-gray-900 dark:text-white">
                {currentUser.plan}
              </p>
            </div>
            <div className="rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
              <p className="text-sm text-gray-500">Credits Used</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                {currentUser.maxCredits - currentUser.credits} /{" "}
                {currentUser.maxCredits}
              </p>
            </div>
            <div className="rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
              <p className="text-sm text-gray-500">Member Since</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                {new Date(currentUser.joinedAt).toLocaleDateString("en-US", {
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
            <div className="rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
              <p className="text-sm text-gray-500">Credits Remaining</p>
              <p className="text-lg font-semibold text-brand-600 dark:text-brand-400">
                {currentUser.credits}
              </p>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Notifications */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card>
          <div className="mb-6 flex items-center gap-2">
            <Bell className="h-5 w-5 text-gray-400" />
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Notifications
            </h2>
          </div>
          <div className="space-y-4">
            {[
              {
                key: "email" as const,
                label: "Email notifications",
                desc: "Receive email about your account activity",
              },
              {
                key: "marketing" as const,
                label: "Marketing emails",
                desc: "Receive emails about new features and offers",
              },
              {
                key: "updates" as const,
                label: "Product updates",
                desc: "Get notified about product updates and changes",
              },
            ].map((item) => (
              <div
                key={item.key}
                className="flex items-center justify-between rounded-xl bg-gray-50 p-4 dark:bg-gray-800"
              >
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {item.label}
                  </p>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
                <Toggle
                  checked={notifications[item.key]}
                  onChange={(v) =>
                    setNotifications({ ...notifications, [item.key]: v })
                  }
                />
              </div>
            ))}
          </div>
        </Card>
      </motion.div>

      {/* Danger Zone */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
      >
        <Card className="border-red-200 dark:border-red-900/50">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-red-500" />
            <h2 className="text-lg font-semibold text-red-600 dark:text-red-400">
              Danger Zone
            </h2>
          </div>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Once you delete your account, there is no going back.
          </p>
          <Button variant="danger" size="sm" className="mt-4">
            Delete Account
          </Button>
        </Card>
      </motion.div>
    </div>
  );
}
