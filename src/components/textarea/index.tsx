interface TextareaProps {
  value: string;
  onChange: (e) => void;
}

const Textarea = ({ value, onChange }: TextareaProps) => {
  return (
    <textarea
      id="message"
      rows={4}
      value={value}
      onChange={onChange}
      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
      placeholder="Write your thoughts here..."
    ></textarea>
  );
};

export default Textarea;
