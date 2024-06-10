import Properties from "./Properties";

const Requirements = ({ requirements }) => {
  return (
    <div className="flex w-full p-4 gap-2">
      <Properties
        title={"حداقل سیستم مورد نیاز"}
        os={requirements.minimum.os}
        cpu={requirements.minimum.cpu}
        memory={requirements.minimum.memory}
        gpu={requirements.minimum.gpu}
        storage={requirements.minimum.storage}
      />
      <Properties
        title={"سیستم پیشنهادی"}
        os={requirements.recommended.os}
        cpu={requirements.recommended.cpu}
        memory={requirements.recommended.memory}
        gpu={requirements.recommended.gpu}
        storage={requirements.recommended.storage}
      />
    </div>
  );
};

export default Requirements;
