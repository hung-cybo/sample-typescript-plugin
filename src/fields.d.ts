declare namespace kintone.types {
  interface SampleApp {
    singleLineText: kintone.fieldTypes.SingleLineText;
    richText: kintone.fieldTypes.RichText;
    multiLineText: kintone.fieldTypes.MultiLineText;
    number: kintone.fieldTypes.Number;
    radioButton: kintone.fieldTypes.RadioButton;
    dropDown: kintone.fieldTypes.DropDown;
    date: kintone.fieldTypes.Date;
    time: kintone.fieldTypes.Time;
    dateTime: kintone.fieldTypes.DateTime;
    link: kintone.fieldTypes.Link;
    checkBox: kintone.fieldTypes.CheckBox;
    multiSelect: kintone.fieldTypes.MultiSelect;
    userSelect: kintone.fieldTypes.UserSelect;
    organizationSelect: kintone.fieldTypes.OrganizationSelect;
    groupSelect: kintone.fieldTypes.GroupSelect;
    file: kintone.fieldTypes.File;
  }
  interface SavedSampleApp extends SampleApp {
    $id: kintone.fieldTypes.Id;
    $revision: kintone.fieldTypes.Revision;
    Created_by: kintone.fieldTypes.Creator;
    Updated_by: kintone.fieldTypes.Modifier;
    Updated_datetime: kintone.fieldTypes.UpdatedTime;
    Created_datetime: kintone.fieldTypes.CreatedTime;
    Record_number: kintone.fieldTypes.RecordNumber;
  }
}
