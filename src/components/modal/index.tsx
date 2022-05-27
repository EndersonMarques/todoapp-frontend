type Props = {
  title: string;
  onCancel: () => void;
  onOkay: () => void;
};

export default function Modal({ title, onCancel, onOkay }: Props) {
  return (
    <div className="flex justify-center items-center absolute w-screen h-screen bg-black bg-opacity-80">
      <div className="bg-gray-900 p-3 rounded-lg">
        <div className="title text-white text-2xl font-bold ">{title}</div>
        <div className="title flex justify-between p-2 text-white text-lg font-bold ">
          <button
            onClick={onOkay}
            className="bg-neutral-700 w-full p-1 m-2 rounded"
          >
            Sim
          </button>
          <button
            onClick={onCancel}
            className="bg-neutral-900 w-full p-1 m-2 rounded"
          >
            Nao
          </button>
        </div>
      </div>
    </div>
  );
}
