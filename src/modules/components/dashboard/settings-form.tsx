"use client";

import { ChangeEvent, useState, useTransition } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { ISettingsForm } from "@/config/types";
import { Button } from "@/components/ui/button";
import { updateEmailAction, updateNameAction } from "@/_actions/user-actions";
import { toast } from "sonner";
import { Loader2, Lock, Save } from "lucide-react";

const SettingsForm = ({ id, name, email }: ISettingsForm) => {
  const [userName, setUserName] = useState(name);
  const [userEmail, setUserEmail] = useState(email);
  const [loadingChangeName, startChangeNameTransition] = useTransition();
  const [loadingChangeEmail, startChangeEmailTransition] = useTransition();

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserEmail(event.target.value);
  };

  const updateName = () => {
    startChangeNameTransition(async () => {
      const response = await updateNameAction(id as string, userName);
      if (response.success) {
        toast.success(response.message);
      } else {
        toast.error(response.message);
      }
    });
  };

  const updateEmail = () => {
    startChangeEmailTransition(async () => {
      const response = await updateEmailAction(id as string, userEmail);
      if (response.success) {
        toast.success(response.message);
      } else {
        toast.error(response.message);
      }
    });
  };

  return (
    <div className="mt-8">
      <div className="flex w-full flex-col items-center gap-8">
        {/* NAME */}
        <Card className="w-full pb-0! md:w-xl">
          <CardHeader>
            <CardTitle className="text-sm">Change Name</CardTitle>
            <CardDescription className="text-xs">
              Change your name below and press save
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Field>
              <Input
                id="name"
                type="text"
                value={userName}
                onChange={handleNameChange}
                placeholder="Your name"
                className="placeholder:text-xs"
              />
            </Field>
          </CardContent>
          <CardFooter className="bg-muted flex items-center justify-between rounded-b-lg py-2">
            <p className="text-muted-foreground text-sm">
              Please use 32 characters maximum
            </p>
            <Button
              size="sm"
              className="min-w-20 text-xs"
              variant="default"
              onClick={updateName}
              disabled={loadingChangeName}
            >
              {loadingChangeName ? (
                <div className="flex items-center justify-center gap-2">
                  <Loader2 className="size-3.5 animate-spin" />
                  <span>Loading...</span>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2">
                  <Save className="size-3.5" />
                  <span>Save</span>
                </div>
              )}
            </Button>
          </CardFooter>
        </Card>
        {/* EMAIL */}
        <Card className="w-full pb-0! md:w-xl">
          <CardHeader>
            <CardTitle className="text-sm">Change Email</CardTitle>
            <CardDescription className="text-xs">
              Change your email below and press save
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Field>
              <Input
                id="email"
                type="text"
                value={userEmail}
                onChange={handleEmailChange}
                placeholder="Your Email"
                className="placeholder:text-xs"
              />
            </Field>
          </CardContent>
          <CardFooter className="bg-muted flex items-center justify-between rounded-b-lg py-2">
            <p className="text-muted-foreground text-sm">
              Please use a valid email address
            </p>
            <Button
              size="sm"
              className="min-w-20 text-xs"
              variant="default"
              onClick={updateEmail}
              disabled={loadingChangeEmail}
            >
              {loadingChangeEmail ? (
                <div className="flex items-center justify-center gap-2">
                  <Loader2 className="size-3.5 animate-spin" />
                  <span>Loading...</span>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2">
                  <Save className="size-3.5" />
                  <span>Save</span>
                </div>
              )}
            </Button>
          </CardFooter>
        </Card>
        {/* PASSWORD */}
        <Card className="w-full pb-0! md:w-xl">
          <CardHeader>
            <CardTitle className="text-sm">Change Password</CardTitle>
            <CardDescription className="text-xs">
              Enter your current password and a new password
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-3">
            <Field className="mb-1 flex flex-col gap-1">
              <FieldLabel className="mb-1! text-xs">
                Current Password
              </FieldLabel>
              <Input
                id="password"
                type="password"
                placeholder="Current Password"
                className="placeholder:text-xs"
              />
            </Field>
            <Field className="mb-1 flex flex-col gap-1">
              <FieldLabel className="mb-1! text-xs">New Password</FieldLabel>
              <Input
                id="newPassoword"
                type="password"
                placeholder="New Password"
                className="placeholder:text-xs"
              />
            </Field>
          </CardContent>
          <CardFooter className="bg-muted flex items-center justify-between rounded-b-lg py-2">
            <p className="text-muted-foreground text-sm">
              Please use 8 characters at minimum
            </p>
            <Button
              size="sm"
              className="min-w-20 text-xs"
              variant="default"
              onClick={updateName}
              disabled={false}
            >
              {false ? (
                <div className="flex items-center justify-center gap-2">
                  <Loader2 className="size-3.5 animate-spin" />
                  <span>Loading...</span>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2">
                  <Lock className="size-3.5" />
                  <span>Change Password</span>
                </div>
              )}
            </Button>
          </CardFooter>
        </Card>
        {/* DELETE ACCOUNT */}
        <Card className="border-destructive w-full pb-0! md:w-xl">
          <CardHeader>
            <CardTitle>Delete Account</CardTitle>
            <CardDescription className="text-xs">
              Permanently remove your account and all of its contents. This
              action is not reversible, so please continue with caution.
            </CardDescription>
          </CardHeader>
          <CardFooter className="bg-destructive/20 flex items-center justify-end rounded-b-lg border-transparent py-2">
            <Button
              size="sm"
              className="min-w-20 text-xs"
              variant="destructive"
            >
              Delete Account
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default SettingsForm;
