//NOTE: the interface here make sure ts check the props pass from the parent and props used in the child
interface ChildProps {
  color: string;
  onClick: () => void;
}

//NOTE: this way of defining props does not let ts know that this is a react compoent (which has some special properties)
export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

//NOTE: better practice to define react functional component type
export const ChildAsFC: React.FC<ChildProps> = ({
  color,
  onClick,
  children,
}) => {
  return (
    <div>
      {color}
      {children}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};
