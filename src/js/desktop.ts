type SampleAppRecord = kintone.types.SavedSampleApp;

interface Event {
  record: SampleAppRecord;
}

kintone.events.on("app.record.index.show", (event: Event) => {
  const record: SampleAppRecord = event.record;
  record.singleLineText.error = null;
});
