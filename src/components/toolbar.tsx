import { MessageSquareIcon, Pencil, Smile, Trash } from "lucide-react";
import { Button } from "./ui/button";
import { Hint } from "./hint";
import { EmojiPopover } from "./emoji-popover";

interface ToolbarProps {
  isAuthor: boolean;
  isPending: boolean;
  handleEdit: () => void;
  handleThread: () => void;
  handleDelete: () => void;
  handleReaction: (value: string) => void;
  hideThreadButton?: boolean;
}

export const Toolbar = ({
  isAuthor,
  isPending,
  handleEdit,
  handleThread,
  handleDelete,
  handleReaction,
  hideThreadButton,
}: ToolbarProps) => {
  return (
    <div className="absolute top-0 right-5">
      <div className="group-hover:opacity-100 opacity-0 transition-opacity border bg-white rounded-md shadow-sm">
        <EmojiPopover
          hint="Add Reactions"
          onEmojiSelect={(emoji) => handleReaction(emoji.native)}
        >
          <Button variant="ghost" size="iconsm" disabled={isPending}>
            <Smile className="size-4" />
          </Button>
        </EmojiPopover>

        {!hideThreadButton && (
          <Hint label="Reply in thread">
            <Button variant="ghost" size="iconsm" 
            disabled={isPending}
            onClick={handleThread}
            >
              <MessageSquareIcon className="size-4" />
            </Button>
          </Hint>
        )}

        {isAuthor && (

            <Hint label="Edit">
          <Button variant="ghost" size="iconsm" 
          disabled={isPending}
          onClick={handleEdit}
          >
            <Pencil className="size-4" />
          </Button>
        </Hint>
        )}
        {isAuthor && (

            <Hint label="Delete">
          <Button variant="ghost" size="iconsm" 
          disabled={isPending}
          onClick={handleDelete}>
            <Trash className="size-4" />
          </Button>
        </Hint>
        )}
      </div>
    </div>
  );
};