import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface LogoutDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  logout: () => void;
}

function LogoutDialog({ open, onOpenChange, logout }: LogoutDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Do you really want to logout?</DialogTitle>
          <DialogDescription>
            This will redirect you to the login screen and remove your current session with Albums.
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-end gap-2 mt-4">
          <button
            onClick={() => onOpenChange(false)}
            className="px-4 py-2 rounded-md bg-gray-400 hover:bg-gray-500"
          >
            Cancel
          </button>
          <button
            onClick={logout}
            className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700"
          >
            Confirm Logout
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default LogoutDialog;
