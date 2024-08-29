import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import IDocumentLinkProps from "@/types/IDocumentLinkProps";
const DocumentLink: React.FC<{ props: IDocumentLinkProps }> = ({ props }) => {
  const { text, path } = props;
  return (
    <div className="hidden md:flex md:gap-x-2">
      <a href={path} target="_blank" className="mt-auto">
        {text}
      </a>
      <ArrowUpRightIcon className="size-5" />
    </div>
  );
};

export default DocumentLink;
