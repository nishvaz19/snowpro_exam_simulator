const questionBank = [
  {
    id: 1,
    difficulty: "easy",
    category: "structure",
    question: "In an HL7 v2.x message, what is the default delimiter used to separate segments?",
    options: ["Carriage Return (ASCII 13)", "Line Feed (ASCII 10)", "Pipe (|)", "Caret (^)"],
    answer: 0,
    explanation: "HL7 segments are separated by a Carriage Return. While pipes separate fields, the segments themselves end with ASCII 13.",
    hint: "Think about the end of a line in a text editor."
  },
  {
    id: 2,
    difficulty: "easy",
    category: "structure",
    question: "What does the MSH segment stand for in an HL7 message?",
    options: ["Message Segment Header", "Message System Handler", "Message Sub-Header", "Message Header Segment"],
    answer: 3,
    explanation: "The MSH segment is the first segment of every HL7 v2 message and contains metadata about the message.",
    hint: "It's the very first 3 characters of a message."
  },
  {
    id: 3,
    difficulty: "medium",
    category: "structure",
    question: "Which field in the MSH segment defines the encoding characters (Component, Sub-component, Repetition, and Escape)?",
    options: ["MSH-1", "MSH-2", "MSH-3", "MSH-9"],
    answer: 1,
    explanation: "MSH-1 is the Field Separator (usually |), and MSH-2 defines the other four delimiters (usually ^~\\&).",
    hint: "Immediately follows the MSH-1 pipe."
  },
  {
    id: 4,
    difficulty: "medium",
    category: "structure",
    question: "In the data string 'DOE^JOHN^Q', what does the '^' character represent?",
    options: ["Field Separator", "Repetition Separator", "Component Separator", "Sub-component Separator"],
    answer: 2,
    explanation: "The caret (^) is the default component separator, used to break down a field like a Name into Family Name, Given Name, etc.",
    hint: "Splits a field into parts."
  },
  {
    id: 5,
    difficulty: "hard",
    category: "structure",
    question: "Which field in the MSH segment indicates the specific version of HL7 being used (e.g., '2.3', '2.5')?",
    options: ["MSH-10", "MSH-11", "MSH-12", "MSH-15"],
    answer: 2,
    explanation: "MSH-12 holds the Version ID, which is critical for the receiving system to know how to parse the message.",
    hint: "Located toward the middle-end of the MSH."
  },
  {
    id: 6,
    difficulty: "easy",
    category: "adt",
    question: "What does an ADT-A01 message typically represent?",
    options: ["Patient Discharge", "Patient Transfer", "Patient Admission", "Patient Registration Update"],
    answer: 2,
    explanation: "ADT-A01 is the standard trigger for a Patient Admit/Visit Notification.",
    hint: "The beginning of a hospital stay."
  },
  {
    id: 7,
    difficulty: "medium",
    category: "structure",
    question: "Which segment is used to provide patient identification details like Name, DOB, and Address?",
    options: ["MSH", "PID", "PV1", "EVN"],
    answer: 1,
    explanation: "The PID (Patient Identification) segment is the primary source of patient demographic information.",
    hint: "P stands for Patient."
  },
  {
    id: 8,
    difficulty: "hard",
    category: "structure",
    question: "If MSH-9 contains 'ADT^A08^ADT_A01', what does the 'A08' signify?",
    options: ["Message Type", "Trigger Event", "Message Structure", "Processing ID"],
    answer: 1,
    explanation: "MSH-9.2 is the Trigger Event. A08 specifically refers to an 'Update Patient Information' event.",
    hint: "The middle component of MSH-9."
  },
  {
    id: 9,
    difficulty: "medium",
    category: "adt",
    question: "Which segment follows PID to provide details about the specific hospital visit, such as Attending Physician and Patient Class?",
    options: ["EVN", "PV1", "NK1", "OBX"],
    answer: 1,
    explanation: "PV1 (Patient Visit) contains visit-specific data like location, room, and doctor.",
    hint: "P-V-One."
  },
  {
    id: 10,
    difficulty: "easy",
    category: "structure",
    question: "What is the purpose of the EVN segment?",
    options: ["Patient demographics", "Event Type metadata (Date/Time of event)", "Insurance info", "Diagnosis info"],
    answer: 1,
    explanation: "The EVN segment communicates the actual date and time the event occurred on the source system.",
    hint: "Abbreviation for 'Event'."
  },
  {
    id: 11,
    difficulty: "medium",
    category: "structure",
    question: "Which delimiter is used when a field has multiple values, such as a patient having two phone numbers?",
    options: ["^ (Caret)", "~ (Tilde)", "\\ (Backslash)", "& (Ampersand)"],
    answer: 1,
    explanation: "The tilde (~) is the default repetition separator.",
    hint: "Looks like a wave."
  },
  {
    id: 12,
    difficulty: "hard",
    category: "structure",
    question: "In the MSH segment, which field acts as a unique identifier for the message, often used for tracking and ACK matching?",
    options: ["MSH-7", "MSH-9", "MSH-10", "MSH-3"],
    answer: 2,
    explanation: "MSH-10 is the Message Control ID. It must be echoed back in an ACK message to confirm receipt.",
    hint: "The 'Tracking Number' of the message."
  },
  {
    id: 13,
    difficulty: "medium",
    category: "adt",
    question: "What ADT message type is used when a patient is discharged from the facility?",
    options: ["A01", "A02", "A03", "A04"],
    answer: 2,
    explanation: "A03 is the trigger event for Discharge.",
    hint: "One, Two, Three... Out."
  },
  {
    id: 14,
    difficulty: "medium",
    category: "adt",
    question: "Which segment is used to list Next of Kin or associated parties?",
    options: ["PV2", "NK1", "GT1", "AL1"],
    answer: 1,
    explanation: "NK1 (Next of Kin) provides contact info for family or emergency contacts.",
    hint: "N-K."
  },
  {
    id: 15,
    difficulty: "hard",
    category: "structure",
    question: "What does the Z-segment (e.g., ZPD) refer to in HL7?",
    options: ["A standard security segment", "A compressed segment", "A custom, locally defined segment", "A segment used only in v3"],
    answer: 2,
    explanation: "Segments starting with 'Z' are reserved for site-specific or vendor-specific data not covered by the standard.",
    hint: "The end of the alphabet for 'Extra' stuff."
  },
  {
    id: 16,
    difficulty: "medium",
    category: "adt",
    question: "Which ADT event is used for a 'Patient Transfer' between units or beds?",
    options: ["A02", "A08", "A11", "A40"],
    answer: 0,
    explanation: "A02 is the specific trigger for a Patient Transfer.",
    hint: "Move from Point A to Point B."
  },
  {
    id: 17,
    difficulty: "easy",
    category: "structure",
    question: "True or False: HL7 v2 messages are human-readable (text-based).",
    options: ["True", "False"],
    answer: 0,
    explanation: "Unlike binary formats, HL7 v2 is delimited text, though it requires knowledge of segments to interpret correctly.",
    hint: "You can open it in Notepad."
  },
  {
    id: 18,
    difficulty: "hard",
    category: "structure",
    question: "What is the maximum number of characters allowed for a segment name?",
    options: ["2", "3", "4", "5"],
    answer: 1,
    explanation: "All HL7 segment names (MSH, PID, etc.) must be exactly 3 characters long.",
    hint: "Three-letter acronyms."
  },
  {
    id: 19,
    difficulty: "medium",
    category: "structure",
    question: "Which field in MSH specifies the receiving application?",
    options: ["MSH-3", "MSH-4", "MSH-5", "MSH-6"],
    answer: 2,
    explanation: "MSH-3 is Sending App, MSH-4 is Sending Facility, MSH-5 is Receiving App.",
    hint: "Odd numbers are Applications, even are Facilities."
  },
  {
    id: 20,
    difficulty: "hard",
    category: "structure",
    question: "What is the 'Escape Character' typically used for in HL7?",
    options: ["To delete a field", "To include delimiters (like |) as literal text within a field", "To restart the message", "To encrypt the data"],
    answer: 1,
    explanation: "The escape character (usually \\) allows you to represent formatting or special characters without breaking the parser.",
    hint: "Think about \\.br\\ for line breaks."
  },
  {
    id: 21,
    difficulty: "medium",
    category: "adt",
    question: "In an ADT-A08 (Update) message, is it required to send every PID field, or only the ones that changed?",
    options: ["Only changed fields", "Everything is required", "Send all available data for that patient", "Only the patient ID"],
    answer: 2,
    explanation: "While technically possible to send partials, standard practice is to send the full current state of the patient record.",
    hint: "Snapshot of the record."
  },
  {
    id: 22,
    difficulty: "hard",
    category: "structure",
    question: "What is the difference between MSH-7 and EVN-2?",
    options: [
      "No difference",
      "MSH-7 is the time the message was created; EVN-2 is the time the clinical event occurred",
      "MSH-7 is for v2.5; EVN-2 is for v2.3",
      "EVN-2 is the arrival time; MSH-7 is the departure time"
    ],
    answer: 1,
    explanation: "MSH-7 is the 'timestamp of the message', whereas EVN-2 is the 'Recorded Date/Time' of the actual business event.",
    hint: "Creation vs Execution."
  },
  {
    id: 23,
    difficulty: "medium",
    category: "adt",
    question: "Which segment carries information about the patient's allergies?",
    options: ["DG1", "AL1", "OBX", "IAM"],
    answer: 1,
    explanation: "AL1 is the standard Allergy segment in v2.x. v2.5+ also supports IAM (Indirect Allergy Mechanism).",
    hint: "A-L."
  },
  {
    id: 24,
    difficulty: "hard",
    category: "adt",
    question: "What trigger event is used for 'Merge Patient - Patient Identifier'?",
    options: ["A18", "A31", "A40", "A47"],
    answer: 2,
    explanation: "A40 is the standard for merging two patient records into one.",
    hint: "Combining identities."
  },
  {
    id: 25,
    difficulty: "easy",
    category: "structure",
    question: "In HL7, what is a 'Set ID' (SI) data type (e.g., PID-1)?",
    options: ["The patient's social security number", "A sequential number (1, 2, 3...) to identify a segment in a list", "A security code", "The hospital ID"],
    answer: 1,
    explanation: "Set IDs allow you to distinguish between multiple segments of the same type (like multiple NK1 segments).",
    hint: "Line numbering."
  },
  {
    id: 26,
    difficulty: "medium",
    category: "structure",
    question: "Which segment contains diagnosis information?",
    options: ["OBR", "DG1", "PR1", "IN1"],
    answer: 1,
    explanation: "DG1 (Diagnosis) contains ICD-9/10 codes and descriptions.",
    hint: "D-G."
  },
  {
    id: 27,
    difficulty: "medium",
    category: "structure",
    question: "Which segment contains procedure information?",
    options: ["DG1", "PR1", "OBX", "PV1"],
    answer: 1,
    explanation: "PR1 (Procedures) tracks surgical or medical procedures performed.",
    hint: "P-R."
  },
  {
    id: 28,
    difficulty: "hard",
    category: "structure",
    question: "What is the purpose of the 'GT1' segment?",
    options: ["Growth Tracking", "Guarantor Information", "Global Timing", "General Treatment"],
    answer: 1,
    explanation: "GT1 contains information about the person or entity responsible for the financial aspect of the visit.",
    hint: "Responsible party for the bill."
  },
  {
    id: 29,
    difficulty: "medium",
    category: "adt",
    question: "If a patient is admitted through the ER, which A-code is used for 'Register a Patient' (often for outpatient/pre-admit)?",
    options: ["A01", "A04", "A05", "A10"],
    answer: 1,
    explanation: "A04 is used for 'Register a Patient', often used for outpatients or those not yet assigned a bed.",
    hint: "Not quite an A01 Admit yet."
  },
  {
    id: 30,
    difficulty: "hard",
    category: "structure",
    question: "In the PID segment, which field is used for 'Date/Time of Birth'?",
    options: ["PID-5", "PID-7", "PID-8", "PID-11"],
    answer: 1,
    explanation: "PID-7 is the standard field for the patient's birth date.",
    hint: "Follows Name and Alias."
  },
  {
    id: 31,
    difficulty: "medium",
    category: "structure",
    question: "Which segment is used for Insurance information?",
    options: ["IN1", "GT1", "ACC", "UB1"],
    answer: 0,
    explanation: "IN1 (Insurance) provides details on the primary, secondary, or tertiary payer.",
    hint: "I-N."
  },
  {
    id: 32,
    difficulty: "hard",
    category: "structure",
    question: "What is the 'Sub-component Separator' character by default?",
    options: ["^", "&", "~", "\\"],
    answer: 1,
    explanation: "The ampersand (&) is used to split a component into even smaller sub-components.",
    hint: "Found in MSH-2 as the last special character."
  },
  {
    id: 33,
    difficulty: "medium",
    category: "structure",
    question: "What does the 'PV1-19' field typically hold?",
    options: ["Assigned Patient Location", "Visit Number / Account Number", "Admit Source", "Discharge Disposition"],
    answer: 1,
    explanation: "PV1-19 is the Visit Number (Fin Number), essential for billing systems.",
    hint: "Visit ID."
  },
  {
    id: 34,
    difficulty: "hard",
    category: "structure",
    question: "In v2.x, how are null values explicitly sent to overwrite existing data in a database?",
    options: ["Leaving the field empty (||)", "Sending the characters \"\"", "Sending the word NULL", "Sending a zero"],
    answer: 1,
    explanation: "Two double quotes (\"\") is the 'delete' indicator in HL7, meaning 'clear this field'. An empty pipe (||) means 'no change/ignore'.",
    hint: "Double quotes."
  },
  {
    id: 35,
    difficulty: "medium",
    category: "structure",
    question: "Which PID field is used for the Patient's Social Security Number (in older versions)?",
    options: ["PID-2", "PID-3", "PID-19", "PID-20"],
    answer: 2,
    explanation: "PID-19 was historically used for SSN, though many modern systems now place it in PID-3 as an identifier with a type code.",
    hint: "Late in the PID segment."
  },
  {
    id: 36,
    difficulty: "hard",
    category: "adt",
    question: "What is an ADT-A11 message?",
    options: ["Patient Arrival", "Cancel Admission", "Cancel Discharge", "Patient Going on Leave"],
    answer: 1,
    explanation: "A11 is used to 'Cancel' an A01 (Admit) if it was entered in error.",
    hint: "Reverse of A01."
  },
  {
    id: 37,
    difficulty: "medium",
    category: "structure",
    question: "What is the difference between PID-3 and PID-2?",
    options: [
      "PID-2 is the Patient ID; PID-3 is the Patient Identifier List",
      "PID-2 is old; PID-3 is the modern standard for multiple IDs",
      "They are the same",
      "PID-2 is internal; PID-3 is external"
    ],
    answer: 1,
    explanation: "PID-2 is deprecated. PID-3 (Identifier List) is where Medical Record Numbers (MRN) and other IDs are stored in modern HL7.",
    hint: "Identifier 'List'."
  },
  {
    id: 38,
    difficulty: "hard",
    category: "structure",
    question: "Which segment is used to report Accident information in an ADT message?",
    options: ["ACC", "EVN", "DG1", "PV2"],
    answer: 0,
    explanation: "The ACC segment provides details on accidents (Work-related, Auto, etc.) for insurance purposes.",
    hint: "A-C-C."
  },
  {
    id: 39,
    difficulty: "medium",
    category: "adt",
    question: "Which segment provides the reason for the visit in an ADT message?",
    options: ["PV1", "PV2", "DG1", "EVN"],
    answer: 1,
    explanation: "PV2 (Patient Visit - Additional Info) often contains the 'Admit Reason'.",
    hint: "Extension of PV1."
  },
  {
    id: 40,
    difficulty: "hard",
    category: "structure",
    question: "In the PID segment, which field is used for 'Patient Address'?",
    options: ["PID-10", "PID-11", "PID-12", "PID-13"],
    answer: 1,
    explanation: "PID-11 contains the address components (Street, City, State, Zip).",
    hint: "After Race (PID-10)."
  },
  {
    id: 41,
    difficulty: "easy",
    category: "structure",
    question: "What is the typical character set for HL7 v2 messages?",
    options: ["Binary", "UTF-16", "ASCII (ISO-8859-1)", "EBCDIC"],
    answer: 2,
    explanation: "Most legacy HL7 is based on the 8-bit ASCII character set.",
    hint: "Standard web/text encoding."
  },
  {
    id: 42,
    difficulty: "medium",
    category: "structure",
    question: "What is the purpose of the 'SFT' segment in newer v2 versions?",
    options: ["System File Transfer", "Software Segment (identifies the sending software)", "Security Filter Token", "Safe Transmission"],
    answer: 1,
    explanation: "SFT identifies the software version and vendor that produced the message, aiding in troubleshooting.",
    hint: "S-F-T."
  },
  {
    id: 43,
    difficulty: "hard",
    category: "structure",
    question: "Which PID field is used for the Patient's Primary Language?",
    options: ["PID-15", "PID-16", "PID-17", "PID-18"],
    answer: 0,
    explanation: "PID-15 stores the primary language code.",
    hint: "Before Marital Status (PID-16)."
  },
  {
    id: 44,
    difficulty: "medium",
    category: "adt",
    question: "What is the trigger event for a 'Cancel Discharge'?",
    options: ["A11", "A12", "A13", "A03"],
    answer: 2,
    explanation: "A13 reverses an A03 (Discharge).",
    hint: "Un-discharging a patient."
  },
  {
    id: 45,
    difficulty: "hard",
    category: "structure",
    question: "What is the 'MSA' segment used for?",
    options: ["Message Security Access", "Message Acknowledgment", "Message Sorting Agent", "Master Segment Association"],
    answer: 1,
    explanation: "The MSA segment is part of an ACK message and indicates if the message was accepted or errored.",
    hint: "Response segment."
  },
  {
    id: 46,
    difficulty: "medium",
    category: "structure",
    question: "In the PV1 segment, which field contains the 'Attending Doctor'?",
    options: ["PV1-7", "PV1-8", "PV1-9", "PV1-10"],
    answer: 0,
    explanation: "PV1-7 is the primary field for the attending physician.",
    hint: "Lucky number 7."
  },
  {
    id: 47,
    difficulty: "hard",
    category: "structure",
    question: "Which field in the MSH segment holds the 'Sending Facility' name?",
    options: ["MSH-3", "MSH-4", "MSH-5", "MSH-6"],
    answer: 1,
    explanation: "MSH-4 is the Sending Facility.",
    hint: "Second application-related field."
  },
  {
    id: 48,
    difficulty: "medium",
    category: "adt",
    question: "Which segment is used to communicate 'Death' information in an ADT message?",
    options: ["EVN", "PID", "PV1", "PD1"],
    answer: 1,
    explanation: "PID-29 (Patient Death Date/Time) and PID-30 (Patient Death Indicator) are used for this purpose.",
    hint: "Stored in demographics."
  },
  {
    id: 49,
    difficulty: "hard",
    category: "structure",
    question: "What does the 'ERR' segment do?",
    options: ["Deletes a message", "Provides specific error details in an ACK", "Encrypts the message", "Tracks network speed"],
    answer: 1,
    explanation: "When a message fails, the ERR segment in the response describes the location and nature of the error.",
    hint: "E-R-R."
  },
  {
    id: 50,
    difficulty: "easy",
    category: "structure",
    question: "In HL7 v2, fields are indexed starting from what number (after the segment name)?",
    options: ["0", "1", "2", "3"],
    answer: 1,
    explanation: "HL7 is 1-indexed. After MSH, the field separator itself is MSH-1.",
    hint: "Start counting from one."
  },
  {
    id: 51,
    difficulty: "medium",
    category: "orders",
    question: "What does the ORM message type stand for in HL7 v2.3?",
    options: ["Order Message", "Observation Reporting Message", "Order Response Management", "Operational Resource Mapping"],
    answer: 0,
    explanation: "ORM is the general Order Message used in older HL7 versions to request tests, procedures, or supplies.",
    hint: "Requesting a lab test."
  },
  {
    id: 52,
    difficulty: "hard",
    category: "results",
    question: "Which message type is the standard for sending 'Unsolicited Observation Results' (Labs/Imaging)?",
    options: ["ORM", "ORU^R01", "OMG^O19", "ACK"],
    answer: 1,
    explanation: "ORU^R01 is the most common result message, where the lab 'pushes' results to the EMR without a specific poll.",
    hint: "O-R-U."
  },
  {
    id: 53,
    difficulty: "medium",
    category: "structure",
    question: "What is the primary difference between the OBR and OBX segments?",
    options: [
      "OBR is for patients; OBX is for doctors",
      "OBR represents the 'Header' of a report (the order); OBX represents the 'Observation' (the specific result line)",
      "OBR is only for Imaging; OBX is only for Labs",
      "There is no difference"
    ],
    answer: 1,
    explanation: "One OBR segment (e.g., CBC test) can be followed by multiple OBX segments (e.g., WBC, RBC, Hgb results).",
    hint: "Report Header vs Result Detail."
  },
  {
    id: 54,
    difficulty: "hard",
    category: "structure",
    question: "In the OBR segment, which field is the 'Placer Order Number'?",
    options: ["OBR-1", "OBR-2", "OBR-3", "OBR-4"],
    answer: 1,
    explanation: "OBR-2 is the unique number assigned by the system that 'placed' the order (usually the EMR).",
    hint: "First ID after the Set ID."
  },
  {
    id: 55,
    difficulty: "hard",
    category: "structure",
    question: "In the OBR segment, which field is the 'Filler Order Number'?",
    options: ["OBR-2", "OBR-3", "OBR-4", "OBR-10"],
    answer: 1,
    explanation: "OBR-3 is the unique number assigned by the system that 'fills' the order (usually the LIS or RIS).",
    hint: "Second ID in the OBR."
  },
  {
    id: 56,
    difficulty: "medium",
    category: "results",
    question: "Which OBX field contains the actual result value (e.g., '12.5')?",
    options: ["OBX-2", "OBX-3", "OBX-5", "OBX-7"],
    answer: 2,
    explanation: "OBX-5 is the 'Observation Value' field.",
    hint: "The data itself."
  },
  {
    id: 57,
    difficulty: "hard",
    category: "structure",
    question: "What does the 'OBX-2' field (Value Type) represent?",
    options: [
      "The ID of the lab",
      "The data type of the result (e.g., NM for Numeric, ST for String, TX for Text)",
      "The date of the result",
      "The priority of the result"
    ],
    answer: 1,
    explanation: "OBX-2 tells the parser how to interpret the data in OBX-5.",
    hint: "NM, ST, or TX."
  },
  {
    id: 58,
    difficulty: "medium",
    category: "results",
    question: "Where are the 'Reference Ranges' (e.g., 4.0 - 10.0) typically stored in an OBX segment?",
    options: ["OBX-5", "OBX-6", "OBX-7", "OBX-8"],
    answer: 2,
    explanation: "OBX-7 contains the normal range for the test.",
    hint: "The benchmark for the result."
  },
  {
    id: 59,
    difficulty: "medium",
    category: "results",
    question: "Which field in the OBX segment indicates if a result is 'Abnormal' (e.g., H for High, L for Low)?",
    options: ["OBX-5", "OBX-8", "OBX-11", "OBX-14"],
    answer: 1,
    explanation: "OBX-8 is the 'Abnormal Flags' field.",
    hint: "Flags for the doctor."
  },
  {
    id: 60,
    difficulty: "hard",
    category: "results",
    question: "In an ORU message, what does the status 'F' in OBX-11 signify?",
    options: ["Failed", "Final Result", "Follow-up required", "Preliminary"],
    answer: 1,
    explanation: "OBX-11 is the Observation Result Status. 'F' means the result is final and verified.",
    hint: "Last stage of a result."
  },
  {
    id: 61,
    difficulty: "medium",
    category: "orders",
    question: "In newer HL7 versions (v2.5+), which message type replaced the general ORM for Lab Orders?",
    options: ["ORR", "OMG^O19", "OML^O21", "ORU"],
    answer: 2,
    explanation: "OML (Laboratory Order Message) is the modern specific message for lab orders.",
    hint: "L for Lab."
  },
  {
    id: 62,
    difficulty: "hard",
    category: "results",
    question: "What is the purpose of the 'ORC' segment?",
    options: [
      "Order Results Controller",
      "Common Order Segment (contains order status and timing details)",
      "Only for Radiology",
      "Only for Pharmacy"
    ],
    answer: 1,
    explanation: "The ORC segment contains data elements common to all orders, such as order control code and ordering provider.",
    hint: "O-R-C."
  },
  {
    id: 63,
    difficulty: "medium",
    category: "results",
    question: "In the OBX segment, which field holds the units of measure (e.g., 'mg/dL')?",
    options: ["OBX-5", "OBX-6", "OBX-7", "OBX-2"],
    answer: 1,
    explanation: "OBX-6 is the Units field, usually formatted using ISO units or UCUM.",
    hint: "The scale of the value."
  },
  {
    id: 64,
    difficulty: "hard",
    category: "orders",
    question: "What does the Order Control code 'NW' in ORC-1 represent?",
    options: ["No Wait", "New Order", "Nursing Ward", "Network Write"],
    answer: 1,
    explanation: "NW is the standard code for a 'New Order' request.",
    hint: "N-W."
  },
  {
    id: 65,
    difficulty: "medium",
    category: "results",
    question: "If a result is a text-based report (like a Chest X-Ray interpretation), which Value Type is used in OBX-2?",
    options: ["NM", "ST", "TX or FT", "DT"],
    answer: 2,
    explanation: "TX (Text) or FT (Formatted Text) are used for long strings or multi-line reports.",
    hint: "Not a number."
  },
  {
    id: 66,
    difficulty: "hard",
    category: "structure",
    question: "Which field in the OBR segment specifies the 'Universal Service Identifier' (e.g., the LOINC code for the test)?",
    options: ["OBR-2", "OBR-4", "OBR-7", "OBR-15"],
    answer: 1,
    explanation: "OBR-4 defines what test was actually ordered or performed.",
    hint: "Identifying the service."
  },
  {
    id: 67,
    difficulty: "medium",
    category: "results",
    question: "In an ORU message, where is the 'Observation Date/Time' (when the specimen was collected) stored?",
    options: ["OBR-7", "OBX-14", "Both OBR-7 and OBX-14 are often used", "MSH-7"],
    answer: 2,
    explanation: "OBR-7 is the Observation Date/Time for the whole battery; OBX-14 is for that specific individual result.",
    hint: "Collection time."
  },
  {
    id: 68,
    difficulty: "hard",
    category: "orders",
    question: "Which message type is used specifically for 'General Imaging Orders'?",
    options: ["ORM", "OML", "OMG^O19", "ORU"],
    answer: 2,
    explanation: "OMG (General Clinical Order) is typically used for Radiology/Imaging requests.",
    hint: "G for General."
  },
  {
    id: 69,
    difficulty: "medium",
    category: "results",
    question: "What is the purpose of the 'NTE' segment?",
    options: ["Network Transmission Entry", "Notes and Comments", "New Test Entry", "Next Task Element"],
    answer: 1,
    explanation: "NTE segments provide free-text comments associated with the preceding segment (PID, OBR, or OBX).",
    hint: "N-T-E for Notes."
  },
  {
    id: 70,
    difficulty: "hard",
    category: "results",
    question: "How are multi-line comments sent in HL7 v2?",
    options: [
      "Using multiple OBX segments",
      "Using multiple NTE segments, each with a Set ID",
      "Using one NTE segment with \\.br\\ escape sequences",
      "Both B and C are valid"
    ],
    answer: 3,
    explanation: "You can repeat NTE segments or use escape characters for line breaks within a single segment.",
    hint: "Note repetition or Escaping."
  },
  {
    id: 71,
    difficulty: "medium",
    category: "results",
    question: "What does the code 'P' in OBX-11 mean?",
    options: ["Passed", "Preliminary Result", "Permanent", "Partial"],
    answer: 1,
    explanation: "Preliminary results are sent before a final verification (common in microbiology).",
    hint: "Not yet Final."
  },
  {
    id: 72,
    difficulty: "hard",
    category: "results",
    question: "In the OBX segment, which field identifies the test performed (e.g., 'Glucose')?",
    options: ["OBX-1", "OBX-2", "OBX-3", "OBX-4"],
    answer: 2,
    explanation: "OBX-3 is the Observation Identifier, which includes the code and description for the specific result.",
    hint: "Result name."
  },
  {
    id: 73,
    difficulty: "medium",
    category: "results",
    question: "What is the purpose of the 'TQ1' segment in v2.5+?",
    options: ["Total Quantity", "Timing/Quantity segment for complex schedules", "Test Query", "Total Quality"],
    answer: 1,
    explanation: "TQ1 replaces older timing fields to provide more granular scheduling for orders.",
    hint: "T-Q for Timing."
  },
  {
    id: 74,
    difficulty: "hard",
    category: "structure",
    question: "Which field in OBR contains the 'Ordering Provider' (the doctor who wrote the order)?",
    options: ["OBR-10", "OBR-16", "OBR-20", "OBR-4"],
    answer: 1,
    explanation: "OBR-16 is the standard field for the ordering physician's identity.",
    hint: "Provider field."
  },
  {
    id: 75,
    difficulty: "medium",
    category: "results",
    question: "If an ORU message contains three separate tests (e.g., Glucose, Sodium, Potassium), how many OBR segments are typically used?",
    options: ["1", "3", "None", "Varies by vendor"],
    answer: 0,
    explanation: "Usually, if they belong to the same order (e.g., a Basic Metabolic Panel), they are grouped under one OBR with three OBXs.",
    hint: "Grouping by Order."
  },
  {
    id: 76,
    difficulty: "hard",
    category: "results",
    question: "What does the status 'C' in OBX-11 indicate?",
    options: ["Completed", "Correction of a previous result", "Cancelled", "Canceled"],
    answer: 1,
    explanation: "C is used when a previously Final (F) result has been amended or corrected.",
    hint: "Change to a result."
  },
  {
    id: 77,
    difficulty: "medium",
    category: "orders",
    question: "In an ORC segment, which field holds the 'Order Status'?",
    options: ["ORC-1", "ORC-5", "ORC-9", "ORC-12"],
    answer: 1,
    explanation: "ORC-5 provides the current status of the order (e.g., IP for In Progress, CM for Completed).",
    hint: "Fifth field of ORC."
  },
  {
    id: 78,
    difficulty: "hard",
    category: "results",
    question: "Which OBX value type is used for a 'Coded Element' (e.g., a result picked from a list like 'Positive')?",
    options: ["ST", "NM", "CE or CWE", "TX"],
    answer: 2,
    explanation: "CE (Coded Element) or CWE (Coded with Exceptions) are used for discrete, coded results.",
    hint: "Coded results."
  },
  {
    id: 79,
    difficulty: "medium",
    category: "results",
    question: "In the OBR segment, OBR-25 is the 'Result Status'. How does it differ from OBX-11?",
    options: [
      "No difference",
      "OBR-25 is the status of the entire order/report; OBX-11 is the status of the individual result line",
      "OBR-25 is only for billing",
      "OBX-11 is only for imaging"
    ],
    answer: 1,
    explanation: "A report (OBR) can be 'Partial' while some of its lines (OBX) are 'Final'.",
    hint: "Header status vs Line status."
  },
  {
    id: 80,
    difficulty: "hard",
    category: "orders",
    question: "What does the Order Control code 'CA' in ORC-1 mean?",
    options: ["Call Agent", "Cancel Order Request", "Confirm Admission", "Change Address"],
    answer: 1,
    explanation: "CA is used to request the cancellation of an existing order.",
    hint: "C-A."
  },
  {
    id: 81,
    difficulty: "medium",
    category: "results",
    question: "Which segment is used to provide 'Specimen' details like source (e.g., Blood, Urine)?",
    options: ["OBR-15", "SPM", "Both are used (SPM is newer)", "PID-11"],
    answer: 2,
    explanation: "OBR-15 was used in older versions, but the SPM (Specimen) segment was introduced in v2.5 for more detail.",
    hint: "S-P-M."
  },
  {
    id: 82,
    difficulty: "hard",
    category: "structure",
    question: "In the OBR segment, which field is 'Diagnostic Serv Sect ID' (e.g., MB for Microbiology, CH for Chemistry)?",
    options: ["OBR-20", "OBR-24", "OBR-25", "OBR-4"],
    answer: 1,
    explanation: "OBR-24 helps the receiving system route the message to the correct department.",
    hint: "Department code."
  },
  {
    id: 83,
    difficulty: "medium",
    category: "results",
    question: "When sending an Image (like a Base64 encoded JPG) in an HL7 message, which OBX-2 type is used?",
    options: ["TX", "NM", "ED or RP", "ST"],
    answer: 2,
    explanation: "ED (Encapsulated Data) or RP (Reference Pointer) are used for binary or large objects.",
    hint: "E-D for Encapsulated."
  },
  {
    id: 84,
    difficulty: "hard",
    category: "orders",
    question: "What does 'ORC-9' (Date/Time of Transaction) usually represent?",
    options: ["When the patient was born", "When the order was actually entered/clicked by the user", "The lab's opening time", "The time the message was sent"],
    answer: 1,
    explanation: "ORC-9 is the business timestamp of the order entry.",
    hint: "Order timestamp."
  },
  {
    id: 85,
    difficulty: "medium",
    category: "results",
    question: "If a result is corrected, does the old OBX segment still need to be sent?",
    options: [
      "No, only the new one",
      "Yes, the corrected message should replace the old one or explicitly indicate the update",
      "Old results are never corrected in HL7",
      "Only the patient ID is sent"
    ],
    answer: 1,
    explanation: "Correction messages (OBX-11 = 'C') update the database; the logic depends on the receiving system's capabilities.",
    hint: "Replacement logic."
  },
  {
    id: 86,
    difficulty: "hard",
    category: "results",
    question: "In OBR-15 (Specimen Source), what is the first component usually used for?",
    options: ["The date", "The source/site (e.g., ARM)", "The doctor's name", "The patient's name"],
    answer: 1,
    explanation: "The first component identifies the site or source of the specimen.",
    hint: "Where it came from."
  },
  {
    id: 87,
    difficulty: "medium",
    category: "orders",
    question: "In v2.3, what segment follows OBR for order-related notes?",
    options: ["OBX", "NTE", "ORC", "Z-segment"],
    answer: 1,
    explanation: "NTE is used to add clinical notes to the order itself.",
    hint: "Comments."
  },
  {
    id: 88,
    difficulty: "hard",
    category: "structure",
    question: "Which field in OBR is 'Requested Date/Time'?",
    options: ["OBR-5", "OBR-6", "OBR-7", "OBR-10"],
    answer: 1,
    explanation: "OBR-6 is the time the requester wants the test to be performed.",
    hint: "The 'When' of the request."
  },
  {
    id: 89,
    difficulty: "medium",
    category: "results",
    question: "What is 'LOINC' used for in OBR-4 and OBX-3?",
    options: ["Billing codes", "Standardized codes for identifying medical laboratory observations", "Patient insurance IDs", "Hospital room numbers"],
    answer: 1,
    explanation: "LOINC is the global standard for lab and clinical observation identification.",
    hint: "Lab coding standard."
  },
  {
    id: 90,
    difficulty: "hard",
    category: "results",
    question: "What does the code 'X' in OBX-11 signify?",
    options: ["Extra", "Results cannot be obtained (Cancelled)", "X-ray result", "Expired"],
    answer: 1,
    explanation: "X indicates that the observation was cancelled or could not be performed.",
    hint: "Cancelled."
  },
  {
    id: 91,
    difficulty: "medium",
    category: "orders",
    question: "Which segment is used to communicate 'Provider' information in a more detailed way than OBR fields (v2.5+)?",
    options: ["PRD", "ROL", "PV1", "NK1"],
    answer: 1,
    explanation: "The ROL (Role) segment identifies various people involved in a specific task or order.",
    hint: "R-O-L."
  },
  {
    id: 92,
    difficulty: "hard",
    category: "results",
    question: "In the OBX-5 field for a Coded result (Value Type CE), which component holds the 'Description'?",
    options: ["Component 1", "Component 2", "Component 3", "Component 4"],
    answer: 1,
    explanation: "For CE: Component 1 is ID, Component 2 is Text/Description, Component 3 is Coding System.",
    hint: "The second part."
  },
  {
    id: 93,
    difficulty: "medium",
    category: "orders",
    question: "What does the Order Control code 'RE' in ORC-1 mean?",
    options: ["Restart", "Result", "Replace", "Received"],
    answer: 1,
    explanation: "RE is used when results are being sent in response to an order.",
    hint: "R-E."
  },
  {
    id: 94,
    difficulty: "hard",
    category: "results",
    question: "What is 'OBX-1' (Set ID) used for?",
    options: ["To identify the patient", "To sequence the results (1, 2, 3...) within an OBR", "To set the date", "To encrypt the result"],
    answer: 1,
    explanation: "If you have 5 results, OBX-1 will be 1, 2, 3, 4, 5.",
    hint: "Sequence number."
  },
  {
    id: 95,
    difficulty: "medium",
    category: "orders",
    question: "In OBR-13 (Relevant Clinical Info), what is typically sent?",
    options: ["The doctor's address", "Symptoms or reason for the test", "Billing info", "The patient's diet"],
    answer: 1,
    explanation: "Clinical context that helps the lab interpret the test.",
    hint: "Clinical context."
  },
  {
    id: 96,
    difficulty: "hard",
    category: "results",
    question: "What is the 'OBX-18' field used for in newer versions?",
    options: ["The price of the test", "Equipment Instance Identifier (which analyzer ran the test)", "The lab's phone number", "The user's login ID"],
    answer: 1,
    explanation: "OBX-18 identifies the specific device used to perform the observation, useful for quality control.",
    hint: "Device ID."
  },
  {
    id: 97,
    difficulty: "medium",
    category: "results",
    question: "Can an ORU message contain multiple OBRs?",
    options: ["No, only one", "Yes, one for each 'battery' or panel of tests", "Only if the patient is discharged", "Only in v2.1"],
    answer: 1,
    explanation: "A single message can contain multiple reports for the same patient.",
    hint: "Batches of reports."
  },
  {
    id: 98,
    difficulty: "hard",
    category: "orders",
    question: "In ORC-1, what does 'DC' stand for?",
    options: ["Discharge", "Discontinue Order", "Doctor's Code", "Data Center"],
    answer: 1,
    explanation: "DC is a request to stop a recurring or active order.",
    hint: "D-C."
  },
  {
    id: 99,
    difficulty: "medium",
    category: "results",
    question: "In v2.3, if a test is cancelled by the lab, what is the 'OBR-25' status code?",
    options: ["F", "P", "X", "I"],
    answer: 2,
    explanation: "X indicates the report was cancelled/deleted.",
    hint: "The letter X."
  },
  {
    id: 100,
    difficulty: "hard",
    category: "results",
    question: "What is the 'OBX-19' field used for?",
    options: ["Date of the test", "Date/Time of the Analysis", "The laboratory's address", "The specimen volume"],
    answer: 1,
    explanation: "Specifically the time the analysis was performed by the instrument.",
    hint: "Analysis time."
  },
  {
    id: 101,
    difficulty: "medium",
    category: "scheduling",
    question: "What does the SIU message type stand for in HL7?",
    options: ["System Information Update", "Scheduling Information Unsolicited", "Service Identification Unit", "Standard Interface Utility"],
    answer: 1,
    explanation: "SIU messages are used to communicate appointment scheduling data between systems (e.g., from a Scheduler to an EMR).",
    hint: "S-I-U for appointments."
  },
  {
    id: 102,
    difficulty: "easy",
    category: "scheduling",
    question: "Which SIU trigger event is used for a 'New Appointment Booking'?",
    options: ["S12", "S14", "S15", "S26"],
    answer: 0,
    explanation: "SIU^S12 is the standard notification for a new appointment being scheduled.",
    hint: "The 'A01' of scheduling."
  },
  {
    id: 103,
    difficulty: "medium",
    category: "scheduling",
    question: "Which segment is the 'Resource' segment in an SIU message, used to identify the provider or room?",
    options: ["RGS", "AIL", "AIG", "AIP"],
    answer: 3,
    explanation: "AIP (Appointment Information - Personnel) identifies the specific person (provider) for the appointment.",
    hint: "P for Personnel."
  },
  {
    id: 104,
    difficulty: "hard",
    category: "scheduling",
    question: "What is the purpose of the 'SCH' segment?",
    options: ["Security Check Header", "Schedule Activity Information (Header for SIU)", "System Change History", "Service Charge"],
    answer: 1,
    explanation: "The SCH segment contains the high-level details of the appointment, such as the Placer/Filler ID and the overall status.",
    hint: "Schedule header."
  },
  {
    id: 105,
    difficulty: "medium",
    category: "scheduling",
    question: "Which SIU event occurs when an appointment is 'Cancelled'?",
    options: ["S13", "S14", "S15", "S17"],
    answer: 2,
    explanation: "SIU^S15 is sent when an appointment is cancelled by the user.",
    hint: "S-fifteen."
  },
  {
    id: 106,
    difficulty: "hard",
    category: "scheduling",
    question: "Which segment identifies the 'Location' (Room/Bed) in an SIU message?",
    options: ["AIP", "AIG", "AIL", "AIS"],
    answer: 2,
    explanation: "AIL (Appointment Information - Location) specifies where the appointment takes place.",
    hint: "L for Location."
  },
  {
    id: 107,
    difficulty: "medium",
    category: "scheduling",
    question: "Which segment identifies the 'Service' (the type of visit, e.g., 'New Patient Exam') in an SIU message?",
    options: ["AIS", "AIG", "AIP", "AIL"],
    answer: 0,
    explanation: "AIS (Appointment Information - Service) carries the code and description for the requested medical service.",
    hint: "S for Service."
  },
  {
    id: 108,
    difficulty: "hard",
    category: "billing",
    question: "What does the DFT message type stand for?",
    options: ["Data File Transfer", "Detail Financial Transaction", "Diagnosis Frequency Table", "Doctor Financial Tracking"],
    answer: 1,
    explanation: "DFT messages (usually DFT^P03) are used to send individual charge items from a clinical system to a billing system.",
    hint: "Financial data."
  },
  {
    id: 109,
    difficulty: "medium",
    category: "billing",
    question: "Which segment is the primary segment for a financial charge in a DFT message?",
    options: ["FT1", "DG1", "IN1", "PR1"],
    answer: 0,
    explanation: "FT1 (Financial Transaction) contains the date, code, and amount of a specific charge.",
    hint: "F-T-One."
  },
  {
    id: 110,
    difficulty: "hard",
    category: "billing",
    question: "In the FT1 segment, which field holds the 'Transaction Amount'?",
    options: ["FT1-4", "FT1-11", "FT1-22", "FT1-10"],
    answer: 2,
    explanation: "FT1-22 is the standard field for the transaction price/amount.",
    hint: "End of the FT1 segment."
  },
  {
    id: 111,
    difficulty: "medium",
    category: "insurance",
    question: "Which segment is used to send 'Employer' information for a patient?",
    options: ["IN1", "GT1", "PD1", "NK1"],
    answer: 2,
    explanation: "PD1 (Patient Additional Demographic) often holds employer details like name and address.",
    hint: "P-D-One."
  },
  {
    id: 112,
    difficulty: "hard",
    category: "ack",
    question: "What does the 'AA' code in MSA-1 of an ACK message mean?",
    options: ["Application Accept", "Always Active", "Authentication Approved", "Admin Access"],
    answer: 0,
    explanation: "AA means the message was received and successfully processed by the receiving application.",
    hint: "Success code."
  },
  {
    id: 113,
    difficulty: "medium",
    category: "ack",
    question: "What does the 'AE' code in MSA-1 of an ACK message mean?",
    options: ["Application Error", "Access Expiration", "Account Ended", "Always Enabled"],
    answer: 0,
    explanation: "AE indicates an 'Application Error', meaning the message was received but had data or business logic errors.",
    hint: "Logic failure."
  },
  {
    id: 114,
    difficulty: "hard",
    category: "ack",
    question: "What does the 'AR' code in MSA-1 of an ACK message mean?",
    options: ["Application Reject", "Account Restricted", "Always Ready", "Access Rejected"],
    answer: 0,
    explanation: "AR (Application Reject) usually means the message was rejected at the communication level or because it was malformed.",
    hint: "System-level rejection."
  },
  {
    id: 115,
    difficulty: "medium",
    category: "ack",
    question: "Which field in the MSA segment must match MSH-10 of the original message?",
    options: ["MSA-1", "MSA-2", "MSA-3", "MSA-4"],
    answer: 1,
    explanation: "MSA-2 contains the Message Control ID of the message being acknowledged to allow for matching.",
    hint: "Message reference ID."
  },
  {
    id: 116,
    difficulty: "hard",
    category: "async",
    question: "What is the 'Original Mode' acknowledgment?",
    options: [
      "Sending an ACK after every segment",
      "The receiving system sends an ACK immediately upon receiving the message via the network",
      "The receiving system waits until the message is written to the database before sending the ACK",
      "Using only v2.1 ACKs"
    ],
    answer: 1,
    explanation: "In Original Mode, the ACK confirms receipt, but not necessarily that the data was perfectly integrated into the database.",
    hint: "Fast acknowledgement."
  },
  {
    id: 117,
    difficulty: "medium",
    category: "billing",
    question: "Which segment follows FT1 to provide the 'Diagnosis' associated with a specific charge?",
    options: ["DG1", "PR1", "OBX", "Z-segment"],
    answer: 0,
    explanation: "DG1 links the medical necessity (diagnosis) to the financial charge (FT1).",
    hint: "D-G-One."
  },
  {
    id: 118,
    difficulty: "hard",
    category: "insurance",
    question: "In the IN1 segment, which field is the 'Plan ID'?",
    options: ["IN1-1", "IN1-2", "IN1-3", "IN1-4"],
    answer: 1,
    explanation: "IN1-2 is the Insurance Plan ID.",
    hint: "Insurance field 2."
  },
  {
    id: 119,
    difficulty: "medium",
    category: "scheduling",
    question: "In the SCH segment, where is the 'Appointment Date/Time' stored?",
    options: ["SCH-1", "SCH-7", "SCH-11", "SCH-16"],
    answer: 2,
    explanation: "SCH-11.4 contains the appointment start time.",
    hint: "Timing field in SCH."
  },
  {
    id: 120,
    difficulty: "hard",
    category: "billing",
    question: "What is the purpose of the 'GT1' segment in a DFT message?",
    options: ["Group Ticket", "Guarantor (the person responsible for the bill)", "Global Transaction", "Grand Total"],
    answer: 1,
    explanation: "The Guarantor segment is essential for billing when the patient is a minor or has a third-party payer.",
    hint: "G-T-One."
  },
  {
    id: 121,
    difficulty: "medium",
    category: "scheduling",
    question: "What trigger event is used for an SIU 'Reschedule'?",
    options: ["S12", "S13", "S14", "S15"],
    answer: 2,
    explanation: "S14 is used to update the timing of an existing appointment.",
    hint: "Change the time."
  },
  {
    id: 122,
    difficulty: "hard",
    category: "scheduling",
    question: "What does the 'RGS' segment do in an SIU message?",
    options: ["Regulates Global Scheduling", "Resource Group Segment (groups AIP/AIL/AIG segments together)", "Restricts General Services", "Registration Status"],
    answer: 1,
    explanation: "RGS allows an appointment to have multiple groups of resources (e.g., a doctor and a room).",
    hint: "Grouping resources."
  },
  {
    id: 123,
    difficulty: "medium",
    category: "scheduling",
    question: "What SIU event is used for a 'Patient No-Show'?",
    options: ["S15", "S26", "S12", "S14"],
    answer: 1,
    explanation: "S26 specifically flags that the patient did not arrive for the appointment.",
    hint: "Missed appointment."
  },
  {
    id: 124,
    difficulty: "hard",
    category: "billing",
    question: "In the FT1 segment, which field indicates the 'Transaction Type' (e.g., CG for Charge, CD for Credit)?",
    options: ["FT1-2", "FT1-6", "FT1-7", "FT1-12"],
    answer: 1,
    explanation: "FT1-6 defines whether the transaction is a debit or a credit.",
    hint: "Type of transaction."
  },
  {
    id: 125,
    difficulty: "medium",
    category: "ack",
    question: "Can an ACK message contain an ERR segment if the status is 'AA'?",
    options: ["Yes", "No", "Only in v2.1", "Only for Z-segments"],
    answer: 1,
    explanation: "If the status is AA (Accept), there are no errors to report. ERR segments accompany AE or AR statuses.",
    hint: "Errors only on failure."
  },
  {
    id: 126,
    difficulty: "hard",
    category: "async",
    question: "What is 'Enhanced Mode' acknowledgment?",
    options: [
      "A two-step ACK process (Accept ACK followed by Application ACK)",
      "An ACK sent via email",
      "An ACK that includes the whole message",
      "Encryption of the ACK"
    ],
    answer: 0,
    explanation: "Enhanced mode uses MSH-15 and MSH-16 to define conditions for both commit and application-level acknowledgments.",
    hint: "Double ACK logic."
  },
  {
    id: 127,
    difficulty: "medium",
    category: "insurance",
    question: "In the IN1 segment, which field indicates the 'Relationship to Insured' (e.g., Spouse, Self)?",
    options: ["IN1-15", "IN1-17", "IN1-22", "IN1-4"],
    answer: 1,
    explanation: "IN1-17 defines how the patient is related to the person holding the policy.",
    hint: "Relationship code."
  },
  {
    id: 128,
    difficulty: "hard",
    category: "insurance",
    question: "Which segment is used for Insurance 'Authorization' or 'Certification' details?",
    options: ["IN1", "IN2", "IN3", "AUT"],
    answer: 2,
    explanation: "IN3 provides additional information for certification and authorization of services.",
    hint: "Beyond basic coverage."
  },
  {
    id: 129,
    difficulty: "medium",
    category: "billing",
    question: "Where is the 'Procedure Code' (CPT/HCPCS) stored in an FT1 segment?",
    options: ["FT1-7", "FT1-25", "FT1-10", "FT1-20"],
    answer: 0,
    explanation: "FT1-7 holds the coded value for the procedure performed.",
    hint: "Coded procedure."
  },
  {
    id: 130,
    difficulty: "hard",
    category: "scheduling",
    question: "If an appointment requires a specific piece of equipment (e.g., an MRI machine), which segment is used?",
    options: ["AIP", "AIL", "AIG", "AIS"],
    answer: 2,
    explanation: "AIG (Appointment Information - General Resource) is used for equipment or non-personnel resources.",
    hint: "G for General Resource."
  },
  {
    id: 131,
    difficulty: "medium",
    category: "ack",
    question: "What does 'MSA-3' typically contain in an error ACK?",
    options: ["The date", "A human-readable error message", "The patient's name", "The hospital ID"],
    answer: 1,
    explanation: "MSA-3 is a text field used for a brief description of the error.",
    hint: "Error text."
  },
  {
    id: 132,
    difficulty: "hard",
    category: "structure",
    question: "In HL7 v2, what is the 'Batch Header' segment name?",
    options: ["MSH", "BHS", "FHS", "BTS"],
    answer: 1,
    explanation: "BHS (Batch Header Segment) is used when multiple HL7 messages are wrapped together in one file.",
    hint: "B-H-S."
  },
  {
    id: 133,
    difficulty: "medium",
    category: "structure",
    question: "In HL7 v2, what is the 'File Trailer' segment name?",
    options: ["FTS", "BTS", "MSH", "END"],
    answer: 0,
    explanation: "FTS (File Trailer Segment) marks the end of a file containing one or more batches.",
    hint: "F-T-S."
  },
  {
    id: 134,
    difficulty: "hard",
    category: "billing",
    question: "What is the 'FT1-1' Set ID used for in a DFT message?",
    options: ["Patient ID", "Sequential number for multiple charges in one message", "Doctor ID", "Transaction ID"],
    answer: 1,
    explanation: "If one DFT message contains three charges, there will be three FT1 segments with Set IDs 1, 2, and 3.",
    hint: "Charge counter."
  },
  {
    id: 135,
    difficulty: "medium",
    category: "insurance",
    question: "Which IN1 field contains the 'Group Name' of the insurance?",
    options: ["IN1-4", "IN1-8", "IN1-9", "IN1-10"],
    answer: 1,
    explanation: "IN1-8 is used for the Insurance Group Name.",
    hint: "Employer group name."
  },
  {
    id: 136,
    difficulty: "hard",
    category: "scheduling",
    question: "What trigger event is used for 'Appointment Deletion' (different from cancellation)?",
    options: ["S15", "S17", "S12", "S20"],
    answer: 1,
    explanation: "S17 is used when a record is completely removed/purged, whereas S15 is just a status change to cancelled.",
    hint: "Permanent removal."
  },
  {
    id: 137,
    difficulty: "medium",
    category: "billing",
    question: "Which field in FT1 specifies the 'Date of Service'?",
    options: ["FT1-2", "FT1-4", "FT1-8", "FT1-10"],
    answer: 1,
    explanation: "FT1-4 is the Transaction Date (the date the service was actually provided).",
    hint: "Service date."
  },
  {
    id: 138,
    difficulty: "hard",
    category: "ack",
    question: "In the ERR segment, which field (v2.5+) allows for the categorization of the error (e.g., 'Warning' vs 'Error')?",
    options: ["ERR-1", "ERR-3", "ERR-4", "ERR-2"],
    answer: 2,
    explanation: "ERR-4 is the Severity field.",
    hint: "How bad is the error?"
  },
  {
    id: 139,
    difficulty: "medium",
    category: "scheduling",
    question: "In the SCH segment, which field is the 'Filler Appointment ID'?",
    options: ["SCH-1", "SCH-2", "SCH-3", "SCH-4"],
    answer: 1,
    explanation: "SCH-2 is the ID assigned by the scheduling system (Filler).",
    hint: "Second field of SCH."
  },
  {
    id: 140,
    difficulty: "hard",
    category: "billing",
    question: "What is the purpose of the 'FT1-20' field?",
    options: ["Price", "Performed by Code (Doctor who did the work)", "Insurance Plan", "Hospital Unit"],
    answer: 1,
    explanation: "FT1-20 identifies the performing provider for that specific charge line.",
    hint: "Who did the service."
  },
  {
    id: 141,
    difficulty: "medium",
    category: "insurance",
    question: "In the IN1 segment, where is the 'Policy Number' stored?",
    options: ["IN1-15", "IN1-36", "IN1-10", "IN1-2"],
    answer: 1,
    explanation: "IN1-36 is commonly used for the policy number / member ID.",
    hint: "Member ID."
  },
  {
    id: 142,
    difficulty: "hard",
    category: "ack",
    question: "What does 'MLP' (Minimum Layer Protocol) refer to in HL7 transmission?",
    options: [
      "A way to wrap HL7 messages for TCP/IP (using 0x0B and 0x1C/0x0D)",
      "A type of encryption",
      "A simplified version of HL7",
      "A database protocol"
    ],
    answer: 0,
    explanation: "MLP (or MLLP) defines the start and end blocks for sending HL7 over a raw socket.",
    hint: "Start and end bytes."
  },
  {
    id: 143,
    difficulty: "medium",
    category: "scheduling",
    question: "If an appointment is 30 minutes long, where is the 'Duration' stored in the SCH segment?",
    options: ["SCH-9", "SCH-10", "SCH-11", "SCH-5"],
    answer: 0,
    explanation: "SCH-9 is the Appointment Duration.",
    hint: "How long it lasts."
  },
  {
    id: 144,
    difficulty: "hard",
    category: "structure",
    question: "What is the 'MSH-15' field used for?",
    options: ["Accept Acknowledgment Type", "Application Acknowledgment Type", "Security", "Country Code"],
    answer: 0,
    explanation: "MSH-15 specifies the conditions under which an 'Accept ACK' is required.",
    hint: "Commit level ACK."
  },
  {
    id: 145,
    difficulty: "medium",
    category: "structure",
    question: "What is the 'MSH-16' field used for?",
    options: ["Accept Acknowledgment Type", "Application Acknowledgment Type", "Message Control ID", "Sequence Number"],
    answer: 1,
    explanation: "MSH-16 specifies the conditions under which an 'Application ACK' is required.",
    hint: "Logic level ACK."
  },
  {
    id: 146,
    difficulty: "hard",
    category: "billing",
    question: "In a DFT message, which segment provides information about the 'Encounter' location at the time of the charge?",
    options: ["PV1", "FT1", "DG1", "IN1"],
    answer: 0,
    explanation: "PV1 is still included in DFT messages to provide context about the patient's location and visit status.",
    hint: "Visit context."
  },
  {
    id: 147,
    difficulty: "medium",
    category: "insurance",
    question: "Which field in IN1 contains the 'Company Name' of the insurance provider?",
    options: ["IN1-2", "IN1-3", "IN1-4", "IN1-5"],
    answer: 2,
    explanation: "IN1-4 is the Insurance Company Name.",
    hint: "The Carrier's name."
  },
  {
    id: 148,
    difficulty: "hard",
    category: "scheduling",
    question: "What is an SIU^S26 message?",
    options: ["No-Show", "Check-in", "Check-out", "Patient Cancellation"],
    answer: 0,
    explanation: "S26 is the trigger for a no-show status update.",
    hint: "Didn't show up."
  },
  {
    id: 149,
    difficulty: "medium",
    category: "structure",
    question: "In HL7 v2, what is the 'Z' in Z-segments short for?",
    options: ["Zone", "Zenith", "Nothing (It just indicates 'Custom')", "Zero"],
    answer: 2,
    explanation: "The 'Z' prefix is reserved for non-standard, user-defined segments.",
    hint: "Custom segments."
  },
  {
    id: 150,
    difficulty: "hard",
    category: "ack",
    question: "Which ERR field (v2.5+) points to the exact segment and field that caused the error?",
    options: ["ERR-1", "ERR-2", "ERR-3", "ERR-5"],
    answer: 1,
    explanation: "ERR-2 (Error Location) uses the ERL data type to specify Segment ID, Sequence, Field, etc.",
    hint: "Where is the error?"
  },
  {
    id: 151,
    difficulty: "medium",
    category: "versions",
    question: "Which HL7 v2 version introduced the 'SPM' (Specimen) segment to better support Lab automation?",
    options: ["2.1", "2.3", "2.5", "2.7"],
    answer: 2,
    explanation: "HL7 v2.5 was a major release that added the SPM segment, moving away from the limited specimen fields in the OBR segment.",
    hint: "Version 2.5."
  },
  {
    id: 152,
    difficulty: "hard",
    category: "v3",
    question: "What is the 'RIM' in HL7 v3?",
    options: ["Resource Information Model", "Reference Information Model", "Relational Interface Metadata", "Role Instance Mapping"],
    answer: 1,
    explanation: "The Reference Information Model (RIM) is the root of all HL7 v3 data structures, based on an object-oriented model.",
    hint: "The backbone of v3."
  },
  {
    id: 153,
    difficulty: "medium",
    category: "cda",
    question: "What does 'CDA' stand for?",
    options: ["Clinical Data Access", "Clinical Document Architecture", "Certified Data Association", "Common Document Archive"],
    answer: 1,
    explanation: "CDA is an XML-based standard for the exchange of clinical documents (like discharge summaries).",
    hint: "XML clinical documents."
  },
  {
    id: 154,
    difficulty: "hard",
    category: "cda",
    question: "A CDA document consists of two main parts. What are they?",
    options: ["MSH and PID", "Header and Body", "XML and JSON", "Text and Binary"],
    answer: 1,
    explanation: "The Header provides metadata (patient, author), while the Body contains the clinical content.",
    hint: "Document structure basics."
  },
  {
    id: 155,
    difficulty: "medium",
    category: "cda",
    question: "What is the purpose of 'Level 1' CDA compatibility?",
    options: [
      "Full discrete data",
      "Only the document header is structured; the body is unstructured (e.g., a PDF or scanned image)",
      "Only CSS is used",
      "No XML is allowed"
    ],
    answer: 1,
    explanation: "Level 1 is the simplest form, where the document is just a 'wrapper' for a non-structured file.",
    hint: "Simple wrapper."
  },
  {
    id: 156,
    difficulty: "hard",
    category: "cda",
    question: "What is the 'CCD' (Continuity of Care Document)?",
    options: [
      "A new HL7 v2 segment",
      "A specific implementation of CDA that uses the ASTM CCR data elements",
      "A billing code",
      "A type of insurance"
    ],
    answer: 1,
    explanation: "CCD is a constraint on CDA, focusing on a summary of a patient's clinical essentials (Allergies, Meds, Problems).",
    hint: "Patient summary document."
  },
  {
    id: 157,
    difficulty: "easy",
    category: "fhir",
    question: "What does 'FHIR' stand for?",
    options: ["Fast Health Information Resources", "Fast Healthcare Interoperability Resources", "First Health Integrated Record", "Federal Health Information Repository"],
    answer: 1,
    explanation: "FHIR is the modern standard combining the best features of HL7 v2, v3, and CDA with web technologies.",
    hint: "The modern standard."
  },
  {
    id: 158,
    difficulty: "medium",
    category: "fhir",
    question: "What is a 'Resource' in FHIR?",
    options: ["A doctor", "The smallest unit of exchange (e.g., Patient, Observation, Medication)", "A database table", "A hardware server"],
    answer: 1,
    explanation: "Resources are the building blocks of FHIR, representing clinical and administrative concepts.",
    hint: "Building block."
  },
  {
    id: 159,
    difficulty: "hard",
    category: "fhir",
    question: "Which format(s) are natively supported for FHIR resources?",
    options: ["Pipe-delimited only", "XML and JSON", "Binary only", "SQL strings"],
    answer: 1,
    explanation: "FHIR is primarily exchanged as JSON or XML, making it very developer-friendly.",
    hint: "Modern web formats."
  },
  {
    id: 160,
    difficulty: "medium",
    category: "fhir",
    question: "What is the 'Base URL' in a FHIR API?",
    options: ["The patient's home address", "The service root URL (e.g., https://example.org/fhir/)", "The login page", "The database name"],
    answer: 1,
    explanation: "All FHIR requests start with the Base URL followed by the Resource name.",
    hint: "API endpoint root."
  },
  {
    id: 161,
    difficulty: "hard",
    category: "fhir",
    question: "What does 'Resource Versioning' (vid) mean in FHIR?",
    options: ["The version of the HL7 standard", "A unique ID for each specific change/update to a resource", "The hospital's software version", "The user's ID"],
    answer: 1,
    explanation: "Every time a resource is updated, FHIR can maintain a history by incrementing the version ID.",
    hint: "Change history."
  },
  {
    id: 162,
    difficulty: "medium",
    category: "versions",
    question: "Which HL7 v2 version is most widely used globally due to its balance of maturity and features?",
    options: ["2.1", "2.3", "2.8", "3.0"],
    answer: 1,
    explanation: "v2.3 (and v2.3.1) remains the 'workhorse' of the healthcare industry.",
    hint: "The most common legacy version."
  },
  {
    id: 163,
    difficulty: "hard",
    category: "v3",
    question: "Why was HL7 v3 considered difficult to implement compared to v2?",
    options: ["It was too fast", "It was highly complex, based on formal modeling and XML without a clear migration path from v2", "It was only in German", "It didn't support patients"],
    answer: 1,
    explanation: "The steep learning curve of the RIM model led to low adoption rates.",
    hint: "Model complexity."
  },
  {
    id: 164,
    difficulty: "medium",
    category: "fhir",
    question: "In FHIR, what is a 'Bundle'?",
    options: ["A physical package", "A container resource used to group multiple resources together (e.g., search results)", "A type of insurance", "A collection of doctors"],
    answer: 1,
    explanation: "Bundles are used for transactions, batches, and returning multiple resources from a query.",
    hint: "Resource collection."
  },
  {
    id: 165,
    difficulty: "hard",
    category: "fhir",
    question: "What is an 'Extension' in FHIR?",
    options: ["A browser plugin", "A standard way to add custom data fields that are not part of the base FHIR resource", "A phone line", "A larger hard drive"],
    answer: 1,
    explanation: "FHIR follows the 80/20 rule; 20% of data needs extensions, and the standard provides a strictly defined way to add them.",
    hint: "Adding custom fields."
  },
  {
    id: 166,
    difficulty: "medium",
    category: "cda",
    question: "What is the 'Narrative Block' in a CDA document?",
    options: ["The part meant for human reading (HTML-like)", "The encoded data for computers", "The document's title", "The footer"],
    answer: 0,
    explanation: "The narrative block ensures that a human can always read the document even if the receiving system can't parse the discrete data.",
    hint: "Human-readable section."
  },
  {
    id: 167,
    difficulty: "hard",
    category: "cda",
    question: "What is 'Level 3' CDA compatibility?",
    options: ["Header only", "Body has narrative only", "Full discrete data (clinical entries) that can be automatically processed", "PDF only"],
    answer: 2,
    explanation: "Level 3 provides structured entries (like XML tags for specific lab values) linked to the narrative text.",
    hint: "Machine-processable data."
  },
  {
    id: 168,
    difficulty: "medium",
    category: "fhir",
    question: "What HTTP method is used to 'Read' a FHIR resource?",
    options: ["POST", "GET", "PUT", "DELETE"],
    answer: 1,
    explanation: "GET /[base]/[type]/[id] is the standard way to retrieve a resource.",
    hint: "Retrieve data."
  },
  {
    id: 169,
    difficulty: "hard",
    category: "fhir",
    question: "What HTTP method is used to 'Update' an existing FHIR resource?",
    options: ["GET", "POST", "PUT", "PATCH"],
    answer: 2,
    explanation: "PUT is used for a full replacement of a resource.",
    hint: "Replacement update."
  },
  {
    id: 170,
    difficulty: "medium",
    category: "fhir",
    question: "What HTTP method is used to 'Create' a new FHIR resource where the ID is assigned by the server?",
    options: ["GET", "POST", "PUT", "DELETE"],
    answer: 1,
    explanation: "POST /[base]/[type] is used to create new entries.",
    hint: "Create data."
  },
  {
    id: 171,
    difficulty: "hard",
    category: "fhir",
    question: "What is a 'Search Parameter' in FHIR?",
    options: ["A Google search", "A defined URL parameter used to filter resources (e.g., ?gender=male)", "A type of resource", "A security key"],
    answer: 1,
    explanation: "FHIR defines specific parameters for each resource to enable powerful querying.",
    hint: "URL filtering."
  },
  {
    id: 172,
    difficulty: "medium",
    category: "fhir",
    question: "In FHIR, what does 'Cardinality' (e.g., 0..1 or 1..*) mean?",
    options: ["The location of the heart", "The minimum and maximum number of times an element can appear", "The speed of the API", "The number of users"],
    answer: 1,
    explanation: "0..1 means optional; 1..* means required and can repeat.",
    hint: "Occurrence rules."
  },
  {
    id: 173,
    difficulty: "hard",
    category: "fhir",
    question: "What is the 'CapabilityStatement' (formerly Conformance)?",
    options: ["A doctor's degree", "A resource that describes the features and resources supported by a specific FHIR server", "A bill for services", "A security certificate"],
    answer: 1,
    explanation: "Clients use this to discover what a server is capable of doing.",
    hint: "Server self-description."
  },
  {
    id: 174,
    difficulty: "medium",
    category: "cda",
    question: "Which organization maintains the CDA and FHIR standards?",
    options: ["WHO", "HL7 International", "IEEE", "ASTM"],
    answer: 1,
    explanation: "HL7 International is the standards development organization.",
    hint: "The same as the message name."
  },
  {
    id: 175,
    difficulty: "hard",
    category: "fhir",
    question: "What is 'Terminology Service' in FHIR?",
    options: ["A dictionary", "A set of operations to handle medical codes (LOINC, SNOMED CT) and value sets", "A translation service", "A billing system"],
    answer: 1,
    explanation: "It allows for expanding value sets and validating codes within resources.",
    hint: "Handling medical codes."
  },
  {
    id: 176,
    difficulty: "medium",
    category: "fhir",
    question: "What is 'SMART on FHIR'?",
    options: ["A very smart doctor", "An app platform that allows third-party applications to run securely across different health systems", "A type of database", "A marketing term"],
    answer: 1,
    explanation: "SMART provides a security layer (OAuth2) and app-launching framework for FHIR.",
    hint: "Apps on FHIR."
  },
  {
    id: 177,
    difficulty: "hard",
    category: "fhir",
    question: "What is the '80/20 Rule' in FHIR design?",
    options: ["80% of data is useless", "The core resources should cover the 80% of data elements used in existing systems; the other 20% use extensions", "80% of users use 20% of the app", "80% of servers are down"],
    answer: 1,
    explanation: "This keeps the core standard simple while allowing for flexibility.",
    hint: "Simplicity vs Extensibility."
  },
  {
    id: 178,
    difficulty: "medium",
    category: "versions",
    question: "Is HL7 v2 backward compatible (e.g., can a v2.5 system read a v2.3 message)?",
    options: ["No", "Yes, as long as new segments are ignored or handled gracefully", "Only with a converter", "Only for ADT messages"],
    answer: 1,
    explanation: "The v2 standard is designed so that a receiver should ignore fields or segments it doesn't recognize.",
    hint: "Graceful ignorance."
  },
  {
    id: 179,
    difficulty: "hard",
    category: "v3",
    question: "What is a 'Message Wrapper' in HL7 v3?",
    options: ["A gift wrap", "The part of the XML that contains control information like Sender and Receiver", "A zip file", "A security layer"],
    answer: 1,
    explanation: "v3 separates the transmission metadata from the actual content (The 'Payload').",
    hint: "Control vs Content."
  },
  {
    id: 180,
    difficulty: "medium",
    category: "cda",
    question: "What is the 'Clinical Document' in FHIR equivalent to?",
    options: ["The Patient resource", "The Composition resource", "The Observation resource", "The Claim resource"],
    answer: 1,
    explanation: "The 'Composition' resource is used to build document-like structures in FHIR.",
    hint: "Building a document in FHIR."
  },
  {
    id: 181,
    difficulty: "hard",
    category: "fhir",
    question: "In FHIR, what is 'Referential Integrity'?",
    options: ["Being honest", "Ensuring that a reference from one resource to another (e.g., Observation to Patient) actually points to an existing resource", "Checking the price", "Encrypted IDs"],
    answer: 1,
    explanation: "Server-side referential integrity prevents 'broken links' in health data.",
    hint: "Valid links."
  },
  {
    id: 182,
    difficulty: "medium",
    category: "fhir",
    question: "What is 'DSTU' in the context of FHIR releases?",
    options: ["Data Storage Technical Unit", "Draft Standard for Trial Use", "Digital Standard Tracking Utility", "Diagnostic Service Test Unit"],
    answer: 1,
    explanation: "FHIR releases were initially called DSTU (e.g., DSTU2) before moving to 'R' (e.g., R4).",
    hint: "Trial versions."
  },
  {
    id: 183,
    difficulty: "hard",
    category: "fhir",
    question: "What is 'FHIR Profiling'?",
    options: ["Tracking user behavior", "The process of constraining resources (making fields mandatory, binding to specific codes) for a specific use case or country", "Renaming resources", "Deleting data"],
    answer: 1,
    explanation: "Profiles (StructureDefinitions) define how FHIR is used in specific contexts (like US Core).",
    hint: "Constraining the standard."
  },
  {
    id: 184,
    difficulty: "medium",
    category: "cda",
    question: "Can a CDA document be rendered in a standard web browser?",
    options: ["No", "Yes, using an XSLT stylesheet to transform the XML into HTML", "Only in special software", "Only if it is a PDF"],
    answer: 1,
    explanation: "CDA documents usually include a reference to a stylesheet for human viewing.",
    hint: "XML to HTML."
  },
  {
    id: 185,
    difficulty: "hard",
    category: "fhir",
    question: "What is the 'History' operation in FHIR?",
    options: ["A list of old doctors", "An operation to retrieve all previous versions of a specific resource or across the whole server", "The patient's birth date", "A security log"],
    answer: 1,
    explanation: "Accessed via GET /[base]/[type]/[id]/_history.",
    hint: "Retrieving the past."
  },
  {
    id: 186,
    difficulty: "medium",
    category: "versions",
    question: "Which HL7 version is 'Object-Oriented'?",
    options: ["v2", "v3", "v2.5", "v2.1"],
    answer: 1,
    explanation: "v3 was built from the ground up as an object-oriented model.",
    hint: "Based on the RIM."
  },
  {
    id: 187,
    difficulty: "hard",
    category: "cda",
    question: "What is an 'OID' in the context of HL7 and CDA?",
    options: ["Order ID", "Object Identifier (a unique dot-separated string like 2.16.840...)", "Only in Diagnosis", "Operation ID"],
    answer: 1,
    explanation: "OIDs are used globally to uniquely identify coding systems, organizations, and document types.",
    hint: "Unique numeric string."
  },
  {
    id: 188,
    difficulty: "medium",
    category: "fhir",
    question: "In FHIR, what is the 'Observation' resource used for?",
    options: ["Watching a patient", "Recording vital signs, lab results, and other clinical measurements", "Scheduling a visit", "Billing"],
    answer: 1,
    explanation: "It is one of the most frequently used resources for clinical data.",
    hint: "Vitals and Labs."
  },
  {
    id: 189,
    difficulty: "hard",
    category: "fhir",
    question: "What is a 'Modifier Extension' in FHIR?",
    options: ["A bigger extension", "An extension that, if not understood, means the reader CANNOT safely process the resource (e.g., 'Patient is NOT actually this person')", "A CSS file", "A type of user"],
    answer: 1,
    explanation: "It changes the meaning of the resource; ignoring it is dangerous.",
    hint: "Critical custom data."
  },
  {
    id: 190,
    difficulty: "medium",
    category: "fhir",
    question: "What is the 'Patient' resource used for?",
    options: ["Billing", "Demographics and administrative information about an individual receiving care", "Clinical notes", "Prescriptions"],
    answer: 1,
    explanation: "It is the central resource for identifying who the care is for.",
    hint: "Core demographics."
  },
  {
    id: 191,
    difficulty: "hard",
    category: "fhir",
    question: "What is 'Chaining' in FHIR search?",
    options: ["Linking resources with a chain", "Filtering based on properties of a referenced resource (e.g., Observation?patient.name=John)", "Encrypting the search", "Sequential searching"],
    answer: 1,
    explanation: "It allows you to 'jump' from one resource to another in a single query.",
    hint: "Searching through references."
  },
  {
    id: 192,
    difficulty: "medium",
    category: "cda",
    question: "What is the 'LOINC' code for a 'Continuity of Care Document'?",
    options: ["12345-6", "34133-9", "9999-0", "0000-1"],
    answer: 1,
    explanation: "34133-9 is the specific LOINC code that identifies a CCD.",
    hint: "Standard CCD code."
  },
  {
    id: 193,
    difficulty: "hard",
    category: "fhir",
    question: "What is 'Reverse Chaining' (_has) in FHIR?",
    options: ["Searching backwards", "Finding resources that are referred to by other resources (e.g., find Patients who HAVE a specific Observation)", "Deleting references", "A type of loop"],
    answer: 1,
    explanation: "The _has parameter is used for reverse selection.",
    hint: "Who points to me?"
  },
  {
    id: 194,
    difficulty: "medium",
    category: "fhir",
    question: "What is 'Multi-tenancy' in a FHIR server?",
    options: ["Many doctors", "Hosting multiple separate organizations or 'tenants' on a single server instance", "Many patients", "Many hard drives"],
    answer: 1,
    explanation: "Critical for cloud-based FHIR platforms.",
    hint: "Shared infrastructure, isolated data."
  },
  {
    id: 195,
    difficulty: "hard",
    category: "fhir",
    question: "What is the 'Reference' data type in FHIR?",
    options: ["A book reference", "A link to another resource (local or absolute URL)", "The patient's name", "A security token"],
    answer: 1,
    explanation: "References create the 'Graph' structure of health data in FHIR.",
    hint: "Linking resources."
  },
  {
    id: 196,
    difficulty: "medium",
    category: "versions",
    question: "Can HL7 v2 be sent over HTTP?",
    options: ["No", "Yes, but it requires a wrapper or special handling as it's not a native web protocol", "Only in v2.1", "Only as a PDF"],
    answer: 1,
    explanation: "Unlike FHIR, HL7 v2 was designed for lower-level socket connections (MLLP).",
    hint: "Needs a wrapper for web."
  },
  {
    id: 197,
    difficulty: "hard",
    category: "fhir",
    question: "What is 'Patch' in FHIR?",
    options: ["A software update", "An operation to update only specific fields of a resource without sending the whole resource", "A physical bandage", "A type of resource"],
    answer: 1,
    explanation: "FHIR supports JSON Patch and XML Patch for partial updates.",
    hint: "Partial update."
  },
  {
    id: 198,
    difficulty: "medium",
    category: "cda",
    question: "What is the 'C-CDA' (Consolidated CDA)?",
    options: ["A broken CDA", "A library of CDA templates for different document types (Discharge, Progress Note, etc.) used in the US", "A fast CDA", "A billing version"],
    answer: 1,
    explanation: "C-CDA consolidated multiple existing CDA templates into one implementation guide.",
    hint: "US document standards."
  },
  {
    id: 199,
    difficulty: "hard",
    category: "fhir",
    question: "What is 'Compartment' in FHIR?",
    options: ["A box", "A way to group resources related to a specific instance (e.g., all resources in the 'Patient' compartment for ID 123)", "A small room", "A security firewall"],
    answer: 1,
    explanation: "Compartments (like Patient, Encounter, Practitioner) help with access control and logical grouping.",
    hint: "Logical data silos."
  },
  {
    id: 200,
    difficulty: "medium",
    category: "fhir",
    question: "In FHIR, what does the 'Status' field (e.g., active, suspended) usually represent?",
    options: ["The patient's health", "The lifecycle state of the resource itself", "The server's speed", "The user's login status"],
    answer: 1,
    explanation: "Almost every FHIR resource has a status to indicate if the record is current, entered-in-error, or finished.",
    hint: "Record lifecycle."
  },
  {
    id: 201,
    difficulty: "medium",
    category: "troubleshooting",
    question: "A receiver is getting HL7 messages but fails to parse them because of a 'trailing whitespace' after the Carriage Return. Which segment is likely being misread?",
    options: ["MSH", "The very last segment of the message", "PID", "All segments"],
    answer: 1,
    explanation: "Standard HL7 v2 parsers expect a Carriage Return (ASCII 13) as the segment terminator. Extra characters after the final CR can cause 'Garbage at end of file' errors.",
    hint: "End of message issue."
  },
  {
    id: 202,
    difficulty: "hard",
    category: "rest_api",
    question: "When connecting to a FHIR API, which HTTP Header is required to specify that you want the response in JSON format?",
    options: ["Content-Type: text/hl7", "Accept: application/fhir+json", "Format: json", "Encoding: utf-8"],
    answer: 1,
    explanation: "The 'Accept' header tells the server which content type the client is prepared to handle. FHIR uses 'application/fhir+json'.",
    hint: "Standard REST negotiation."
  },
  {
    id: 203,
    difficulty: "medium",
    category: "rest_api",
    question: "In a FHIR REST API, what is the purpose of the 'Authorization' header?",
    options: ["To send the patient's name", "To carry a Bearer Token (JWT) for secure access", "To identify the hospital", "To specify the HL7 version"],
    answer: 1,
    explanation: "Most modern healthcare APIs use OAuth 2.0, where the token is passed in the Authorization header.",
    hint: "Bearer token."
  },
  {
    id: 204,
    difficulty: "hard",
    category: "performance",
    question: "What is 'Vertical Scaling' in the context of an HL7 Integration Engine (like Mirth/NextGen)?",
    options: ["Adding more servers to a cluster", "Increasing the CPU and RAM of the existing server", "Sending messages faster", "Adding more channels"],
    answer: 1,
    explanation: "Vertical scaling (Scaling Up) means making the single machine more powerful to handle higher throughput.",
    hint: "Bigger box."
  },
  {
    id: 205,
    difficulty: "medium",
    category: "performance",
    question: "What is 'Horizontal Scaling'?",
    options: ["Increasing CPU", "Adding more server nodes to distribute the message load", "Adding more fields to a segment", "Reducing message size"],
    answer: 1,
    explanation: "Horizontal scaling (Scaling Out) involves adding more instances to a load-balanced cluster.",
    hint: "More boxes."
  },
  {
    id: 206,
    difficulty: "hard",
    category: "async",
    question: "In an asynchronous HL7 workflow, what is 'Deferred Acknowledgment'?",
    options: [
      "Sending an ACK 5 minutes later",
      "The sender does not wait for an immediate ACK before sending the next message in the queue",
      "The receiver never sends an ACK",
      "ACKs are only sent via email"
    ],
    answer: 1,
    explanation: "This allows for high-volume throughput where the sender 'fires and forgets' and processes ACKs as they arrive later.",
    hint: "Non-blocking sender."
  },
  {
    id: 207,
    difficulty: "medium",
    category: "troubleshooting",
    question: "You see 'MSH-9' containing 'ORU^R01^ORU_R01' but the receiver fails with 'Unknown Message Type'. What is the most likely cause?",
    options: ["Wrong Patient ID", "Mismatch in the Message Structure component (ORU_R01)", "The message is too long", "The lab is closed"],
    answer: 1,
    explanation: "Many parsers validate the third component of MSH-9 (Message Structure). If it doesn't match the expected version's definition, parsing fails.",
    hint: "MSH-9.3 validation."
  },
  {
    id: 208,
    difficulty: "hard",
    category: "rest_api",
    question: "What are 'Cookies' typically used for in a web-based FHIR portal?",
    options: ["Storing medical records", "Maintaining session state after a user logs in", "Encrypting the database", "Speeding up the network"],
    answer: 1,
    explanation: "Cookies track the user session, though API-to-API communication usually relies on Tokens.",
    hint: "Session management."
  },
  {
    id: 209,
    difficulty: "medium",
    category: "performance",
    question: "What is 'Latency' in an HL7 interface?",
    options: ["The number of messages per second", "The time delay between a message being sent and being processed/ACKed", "The size of the message", "The version of HL7"],
    answer: 1,
    explanation: "High latency can cause bottlenecks in clinical systems where real-time data is needed.",
    hint: "Time delay."
  },
  {
    id: 210,
    difficulty: "hard",
    category: "scenarios",
    question: "A 'Downstream' system is overwhelmed and starts responding with 'AR' (Application Reject) to every message. What is the best strategy for the Integration Engine?",
    options: [
      "Delete all messages",
      "Implement a 'Queue' with a retry mechanism and a back-off timer",
      "Send the messages even faster",
      "Ignore the AR ACKs"
    ],
    answer: 1,
    explanation: "Queuing and retrying ensures no data is lost during downstream downtime or congestion.",
    hint: "Retry logic."
  },
  {
    id: 211,
    difficulty: "medium",
    category: "rest_api",
    question: "What is the HTTP status code for 'Created' in a FHIR API?",
    options: ["200 OK", "201 Created", "404 Not Found", "500 Error"],
    answer: 1,
    explanation: "A successful POST request that creates a new resource returns a 201 status.",
    hint: "Success + 1."
  },
  {
    id: 212,
    difficulty: "hard",
    category: "rest_api",
    question: "In FHIR, what does a '422 Unprocessable Entity' status code usually mean?",
    options: ["The server is down", "The resource was found but is deleted", "The submitted resource failed business validation rules", "Invalid login credentials"],
    answer: 2,
    explanation: "The server understood the format, but the data violates clinical or structural constraints.",
    hint: "Validation failure."
  },
  {
    id: 213,
    difficulty: "medium",
    category: "performance",
    question: "What is 'Throughput'?",
    options: ["The speed of light", "The volume of messages processed within a specific time frame (e.g., messages per minute)", "The length of a message", "The number of segments"],
    answer: 1,
    explanation: "Throughput measures the capacity of the interface.",
    hint: "Volume over time."
  },
  {
    id: 214,
    difficulty: "hard",
    category: "troubleshooting",
    question: "If an HL7 message contains a '|' (Pipe) within a text field (e.g., 'Notes: High | Low'), why might this break the interface?",
    options: [
      "Pipes are not allowed in HL7",
      "The parser will interpret the pipe as a field separator, causing 'Field Misalignment'",
      "The message will be encrypted",
      "The PID segment will be deleted"
    ],
    answer: 1,
    explanation: "Literal delimiters in text must be escaped (e.g., \\F\\) to prevent the parser from seeing them as segment/field markers.",
    hint: "Delimiter collision."
  },
  {
    id: 215,
    difficulty: "medium",
    category: "async",
    question: "What is 'FIFO' in message queuing?",
    options: ["Fast In, Fast Out", "First In, First Out (Messages are processed in the order they arrived)", "File In, Folder Out", "Filtering Incoming Frequency"],
    answer: 1,
    explanation: "FIFO is critical for HL7 to ensure an 'Admit' (A01) is processed before a 'Discharge' (A03).",
    hint: "Sequential order."
  },
  {
    id: 216,
    difficulty: "hard",
    category: "scenarios",
    question: "You are receiving ADT messages but the patient's 'Last Name' is appearing in the 'First Name' field. Which PID component should you check?",
    options: ["PID-5.1 vs PID-5.2", "PID-3", "PID-7", "PID-11"],
    answer: 0,
    explanation: "PID-5 is the Patient Name field. Component 1 is Family Name, Component 2 is Given Name.",
    hint: "Name components."
  },
  {
    id: 217,
    difficulty: "medium",
    category: "backward_compatibility",
    question: "Why should an HL7 receiver 'Ignore' unexpected segments at the end of a message?",
    options: [
      "To save disk space",
      "To maintain backward compatibility with future versions that might add new segments",
      "Because they are always viruses",
      "Because MSH-10 requires it"
    ],
    answer: 1,
    explanation: "Robust receivers follow the 'Be conservative in what you send, liberal in what you accept' rule.",
    hint: "Robustness principle."
  },
  {
    id: 218,
    difficulty: "hard",
    category: "rest_api",
    question: "What is 'CORS' (Cross-Origin Resource Sharing) in healthcare web apps?",
    options: [
      "A type of clinical code",
      "A security mechanism that allows or restricts a web browser from making requests to a different domain than the one that served the app",
      "A database protocol",
      "An encryption standard"
    ],
    answer: 1,
    explanation: "CORS must be configured on FHIR servers to allow web-based EMR plugins to access data.",
    hint: "Browser security."
  },
  {
    id: 219,
    difficulty: "medium",
    category: "rest_api",
    question: "What is 'Rate Limiting' on a FHIR server?",
    options: [
      "Limiting the number of users",
      "Restricting the number of API requests a client can make in a certain time period to prevent abuse",
      "Changing the price of the API",
      "Slowing down the internet"
    ],
    answer: 1,
    explanation: "Rate limiting protects the server from being overwhelmed by buggy clients or DDoS attacks.",
    hint: "Throttling."
  },
  {
    id: 220,
    difficulty: "hard",
    category: "async",
    question: "What is 'Poison Message' in an HL7 queue?",
    options: [
      "A message with clinical data about toxins",
      "A malformed message that causes the processing service to crash every time it is retried",
      "An encrypted message",
      "A message from an unknown facility"
    ],
    answer: 1,
    explanation: "Poison messages must be moved to an 'Error Queue' (Dead Letter Queue) so they don't block the rest of the FIFO queue.",
    hint: "Queue blocker."
  },
  {
    id: 221,
    difficulty: "medium",
    category: "rest_api",
    question: "In FHIR, what does the '_summary=true' parameter do?",
    options: [
      "Deletes the resource",
      "Returns only a subset of the most important elements of the resource to reduce payload size",
      "Summarizes the cost",
      "Summarizes the doctor's notes"
    ],
    answer: 1,
    explanation: "Useful for performance when you only need names or IDs, not the full clinical history.",
    hint: "Reduced data."
  },
  {
    id: 222,
    difficulty: "hard",
    category: "performance",
    question: "Which of the following consumes the most 'Processing Power' in an integration engine?",
    options: [
      "Sending a message",
      "Parsing and Transforming (mapping) complex XML/JSON to v2 segments",
      "Receiving an ACK",
      "Logging the message ID"
    ],
    answer: 1,
    explanation: "Transformation logic (Scripting/XSLT) is usually the CPU-intensive part of integration.",
    hint: "Data manipulation."
  },
  {
    id: 223,
    difficulty: "medium",
    category: "troubleshooting",
    question: "You see 'MLLP Error: Connection Reset by Peer'. What happened?",
    options: [
      "The message was too small",
      "The remote system abruptly closed the network connection",
      "The patient was discharged",
      "The password was wrong"
    ],
    answer: 1,
    explanation: "This usually points to a network firewall, a crash on the receiving end, or a timeout.",
    hint: "Network disconnect."
  },
  {
    id: 224,
    difficulty: "hard",
    category: "rest_api",
    question: "What is 'Idempotency' in a REST API?",
    options: [
      "The ability to send messages to many people",
      "The property where making the same request multiple times has the same effect as making it once (e.g., PUT)",
      "A type of encryption",
      "A database backup"
    ],
    answer: 1,
    explanation: "PUT is idempotent; POST is usually not, as repeating a POST might create duplicate records.",
    hint: "Repeatability."
  },
  {
    id: 225,
    difficulty: "medium",
    category: "scenarios",
    question: "An HL7 message is received with no MSH segment. What should the engine do?",
    options: ["Guess the version", "Reject the message immediately (it is not a valid HL7 message)", "Store it in the database", "Email the patient"],
    answer: 1,
    explanation: "MSH is the required entry point; without it, the parser cannot determine delimiters or message type.",
    hint: "Missing header."
  },
  {
    id: 226,
    difficulty: "hard",
    category: "rest_api",
    question: "What is an 'ETag' in a FHIR response?",
    options: [
      "Electronic Tag for billing",
      "A version identifier used for 'Optimistic Concurrency Control' to prevent overwriting someone else's changes",
      "The patient's email",
      "The server's name"
    ],
    answer: 1,
    explanation: "ETags allow a client to say 'Update this resource only if the version I have is still the current one'.",
    hint: "Conflict prevention."
  },
  {
    id: 227,
    difficulty: "medium",
    category: "async",
    question: "What is a 'Dead Letter Queue' (DLQ)?",
    options: [
      "Where messages for deceased patients go",
      "A secondary queue where messages that fail all retry attempts are stored for manual review",
      "A deleted folder",
      "A queue for email"
    ],
    answer: 1,
    explanation: "DLQs prevent failing messages from being lost and allow admins to fix and re-process them.",
    hint: "Error storage."
  },
  {
    id: 228,
    difficulty: "hard",
    category: "scenarios",
    question: "A Lab system sends 'Hgb' results as 'NM' (Numeric), but occasionally sends 'REJECTED' in the same field. What is the best v2 data type to handle this?",
    options: ["NM (keep it as is)", "ST (String) or Varying types", "DT (Date)", "Only use Z-segments"],
    answer: 1,
    explanation: "If a field can contain both numbers and text, the parser/database must be flexible enough (often using ST) to prevent errors.",
    hint: "Type flexibility."
  },
  {
    id: 229,
    difficulty: "medium",
    category: "rest_api",
    question: "What is 'Payload Compression' (e.g., Gzip)?",
    options: [
      "Making the text smaller for encryption",
      "Compressing the data for faster transmission over the network",
      "Removing segments",
      "Deleting the patient"
    ],
    answer: 1,
    explanation: "Compression reduces bandwidth usage, which is vital for mobile health apps.",
    hint: "Shrinking data."
  },
  {
    id: 230,
    difficulty: "hard",
    category: "performance",
    question: "What is 'Message Batching' (v2)?",
    options: [
      "Grouping 1000 messages into one file (BHS/BTS) to improve processing efficiency of large datasets",
      "Sending 1000 messages at once via 1000 connections",
      "Changing the version to v3",
      "A type of security"
    ],
    answer: 0,
    explanation: "Batching reduces the overhead of establishing connections and acknowledging every single message individually.",
    hint: "Bulk processing."
  },
  {
    id: 231,
    difficulty: "medium",
    category: "troubleshooting",
    question: "Which tool is commonly used to 'Sniff' network traffic to debug MLLP/HL7 connections?",
    options: ["Photoshop", "Wireshark", "Excel", "Notepad"],
    answer: 1,
    explanation: "Wireshark allows you to see the raw bytes (including MLLP start/stop characters) moving across the wire.",
    hint: "Network packet analyzer."
  },
  {
    id: 232,
    difficulty: "hard",
    category: "rest_api",
    question: "What is 'OpenID Connect' (OIDC) in relation to FHIR?",
    options: [
      "A way to open a file",
      "An identity layer on top of OAuth 2.0 that allows clients to verify the identity of the end-user",
      "A connection to the database",
      "A type of patient ID"
    ],
    answer: 1,
    explanation: "SMART on FHIR uses OIDC to provide user identity information alongside the data access token.",
    hint: "Identity layer."
  },
  {
    id: 233,
    difficulty: "medium",
    category: "scenarios",
    question: "A message has PID-5 as 'SMITH^JOHN^^^DR'. What is the 'DR' part?",
    options: ["Degree", "Prefix", "Suffix/Title", "Middle Name"],
    answer: 2,
    explanation: "The 5th component of XPN (Extended Person Name) is the Suffix (e.g., Jr, III, MD).",
    hint: "Name component 5."
  },
  {
    id: 234,
    difficulty: "hard",
    category: "rest_api",
    question: "What is 'HATEOAS' in the context of REST?",
    options: [
      "A clinical coding system",
      "Hypermedia as the Engine of Application State (Using links in responses to guide the client on what they can do next)",
      "A high-speed network",
      "A type of hospital"
    ],
    answer: 1,
    explanation: "FHIR implements this via 'links' and 'references' within resources.",
    hint: "Following links."
  },
  {
    id: 235,
    difficulty: "medium",
    category: "async",
    question: "What is 'Polling'?",
    options: [
      "Asking the user for their opinion",
      "The client periodically asking the server 'Is there any new data?' instead of the server pushing it",
      "A type of database",
      "Sending an ACK"
    ],
    answer: 1,
    explanation: "Polling is less efficient than 'Webhooks' or 'Push' notifications but often easier to implement in legacy systems.",
    hint: "Checking for updates."
  },
  {
    id: 236,
    difficulty: "hard",
    category: "performance",
    question: "What is the 'Cold Start' problem in FHIR serverless functions?",
    options: [
      "The server is in a cold room",
      "The delay when a cloud function (like AWS Lambda) is triggered after being idle, as the environment must be initialized",
      "The hospital is closed in winter",
      "The database is empty"
    ],
    answer: 1,
    explanation: "This can cause high latency for the first API request after a period of inactivity.",
    hint: "Initial startup delay."
  },
  {
    id: 237,
    difficulty: "medium",
    category: "troubleshooting",
    question: "What does 'Character Encoding Mismatch' (e.g., UTF-8 vs Latin-1) usually cause in an HL7 message?",
    options: [
      "The message is deleted",
      "Garbled characters (e.g., 'Müller' becoming 'MÃ¼ller')",
      "The patient's age changes",
      "The doctor's name is removed"
    ],
    answer: 1,
    explanation: "Both systems must agree on the character set (usually defined or assumed in MSH-18).",
    hint: "Symbol corruption."
  },
  {
    id: 238,
    difficulty: "hard",
    category: "scenarios",
    question: "You need to send 'Historical' data from 10 years ago. Should you send it as an ADT^A01?",
    options: [
      "Yes",
      "No, A01 is for a current admission; historical data should be sent using specific archive events or via FHIR resources with past timestamps",
      "Only if the patient is still alive",
      "Only in v2.1"
    ],
    answer: 1,
    explanation: "Triggering an A01 for an old visit might cause the EMR to think the patient just walked in the door today.",
    hint: "Context of the event."
  },
  {
    id: 239,
    difficulty: "medium",
    category: "rest_api",
    question: "What is 'JSON Web Token' (JWT)?",
    options: [
      "A clinical document",
      "A compact, URL-safe means of representing claims to be transferred between two parties (commonly used for API Auth)",
      "A type of JavaScript function",
      "A patient ID"
    ],
    answer: 1,
    explanation: "JWTs are the industry standard for securing FHIR APIs.",
    hint: "J-W-T."
  },
  {
    id: 240,
    difficulty: "hard",
    category: "performance",
    question: "What is 'Database Indexing' and why is it vital for HL7?",
    options: [
      "A list of books",
      "Creating data structures that allow the database to find Patient or Visit records quickly without scanning every row",
      "Deleting old data",
      "A security feature"
    ],
    answer: 1,
    explanation: "Without indexes on fields like MRN or Account Number, an integration engine will slow to a crawl as the database grows.",
    hint: "Search optimization."
  },
  {
    id: 241,
    difficulty: "medium",
    category: "troubleshooting",
    question: "In HL7, what is 'Segment Wrapping'?",
    options: [
      "A security layer",
      "When a segment is too long and a system incorrectly adds a line break, splitting one segment into two",
      "A way to group segments",
      "A gift wrap"
    ],
    answer: 1,
    explanation: "Unintended line breaks (often from older text systems) break the HL7 structure because the second line doesn't start with a 3-letter segment ID.",
    hint: "Broken segments."
  },
  {
    id: 242,
    difficulty: "hard",
    category: "rest_api",
    question: "What does the 'Prefer: return=representation' header do in FHIR?",
    options: [
      "Deletes the resource",
      "Requests that the server return the full resource content after a POST or PUT, rather than just an ID",
      "Changes the language",
      "Speeds up the server"
    ],
    answer: 1,
    explanation: "This saves the client from having to do a follow-up GET request to see the final state of the resource.",
    hint: "Return the whole thing."
  },
  {
    id: 243,
    difficulty: "medium",
    category: "scenarios",
    question: "You are receiving messages from two different hospitals. How do you distinguish them if both use the same MRNs for different patients?",
    options: [
      "You can't",
      "Use 'MSH-4' (Sending Facility) to scope the Patient ID (e.g., HospitalA_123 vs HospitalB_123)",
      "Change the version",
      "Ask the patients"
    ],
    answer: 1,
    explanation: "Identifier 'Assigning Authorities' (often represented by MSH-4) are key to preventing ID collisions.",
    hint: "Namespace the IDs."
  },
  {
    id: 244,
    difficulty: "hard",
    category: "rest_api",
    question: "What is 'Bulk FHIR' (Flat FHIR)?",
    options: [
      "A large patient",
      "A standard (FHIR Bulk Data Access) for exporting large datasets (thousands of patients) efficiently using NDJSON",
      "A low-quality version of FHIR",
      "A type of insurance"
    ],
    answer: 1,
    explanation: "Instead of thousands of API calls, Bulk FHIR allows for one large asynchronous download.",
    hint: "Massive data export."
  },
  {
    id: 245,
    difficulty: "medium",
    category: "performance",
    question: "What is a 'Memory Leak' in an integration engine?",
    options: [
      "Forgetting a password",
      "When a script or process uses RAM but fails to release it, eventually causing the engine to crash",
      "A broken hard drive",
      "A fast computer"
    ],
    answer: 1,
    explanation: "Common in custom JavaScript mappings that create global variables or large objects without clearing them.",
    hint: "Resource exhaustion."
  },
  {
    id: 246,
    difficulty: "hard",
    category: "rest_api",
    question: "What is 'NDJSON' used for in Bulk FHIR?",
    options: [
      "Newline Delimited JSON (where each line is a separate JSON object)",
      "New Diagnostic JSON",
      "A type of security",
      "A database name"
    ],
    answer: 0,
    explanation: "NDJSON allows systems to process massive files line-by-line without loading the whole file into memory.",
    hint: "Line-by-line JSON."
  },
  {
    id: 247,
    difficulty: "medium",
    category: "troubleshooting",
    question: "A system is sending 'PV1-44' (Admit Date) in the format 'MM/DD/YYYY'. Why is this an error?",
    options: [
      "HL7 requires dates to be in the 'YYYYMMDD' (TS) format",
      "Slash characters are not allowed in HL7",
      "The year must be two digits",
      "Dates are not allowed in PV1"
    ],
    answer: 0,
    explanation: "Standard HL7 Date/Time (TS) format is YYYYMMDDHHMMSS. Deviating from this breaks standard parsers.",
    hint: "ISO-like date format."
  },
  {
    id: 248,
    difficulty: "hard",
    category: "scenarios",
    question: "How do you handle a 'Merge' in FHIR (equivalent to ADT^A40)?",
    options: [
      "Delete one patient",
      "Update the 'link' element in the Patient resource to point the 'retired' record to the 'active' one",
      "FHIR does not support merges",
      "Rename the patient"
    ],
    answer: 1,
    explanation: "FHIR uses the Patient.link property to manage identity merges and associations.",
    hint: "Linking resources."
  },
  {
    id: 249,
    difficulty: "medium",
    category: "performance",
    question: "What is 'Load Balancing'?",
    options: [
      "Checking the weight of a patient",
      "Distributing incoming network traffic across multiple servers to ensure no single server is overwhelmed",
      "Reducing message size",
      "A type of security"
    ],
    answer: 1,
    explanation: "Crucial for high-availability FHIR and HL7 clusters.",
    hint: "Traffic distribution."
  },
  {
    id: 250,
    difficulty: "hard",
    category: "rest_api",
    question: "What is 'SMART on FHIR Scope' (e.g., 'patient/*.read')?",
    options: [
      "The doctor's stethoscope",
      "A string that defines the specific permissions granted to an app (e.g., read-only access to all data for the current patient)",
      "The size of the screen",
      "The length of the URL"
    ],
    answer: 1,
    explanation: "Scopes limit what an application can do, ensuring it only sees the data it needs.",
    hint: "Access control string."
  },
];

// --- TOP 100 INTERVIEW INDICES ---
// These indices point to unique, high-value questions from the bank for rapid interview prep.
// Focus: HL7 v2 Segment Logic, FHIR RESTful API, SMART on FHIR, and Integration Scenarios.
const hotsQuestions = [
    // 1. HL7 v2 Fundamentals (MSH, Delimiters, Message Types) - 15 indices
    0, 1, 2, 4, 10, 15, 20, 25, 30, 45, 
    55, 62, 78, 81, 90,

    // 2. Clinical Data Segments (PID, PV1, ORC, OBR, OBX) - 20 indices
    5, 6, 7, 8, 9, 50, 51, 52, 53, 54, 
    56, 57, 58, 59, 60, 61, 63, 64, 65, 70,

    // 3. FHIR Resources & Paradigms (Patient, Observation, Bundle) - 20 indices
    100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 
    150, 155, 160, 165, 170, 175, 180, 185, 190, 195,

    // 4. API & Security (REST Verbs, SMART on FHIR, OAuth2, Scopes) - 20 indices
    200, 205, 210, 215, 220, 225, 230, 235, 240, 241, 
    242, 243, 244, 245, 246, 247, 248, 250, 11, 12,

    // 5. Interface Engine Scenarios (ACK/NACK, Mappings, Z-Segments) - 15 indices
    13, 14, 16, 17, 18, 19, 21, 22, 23, 24, 
    26, 27, 28, 29, 31,

    // 6. Troubleshooting & System Performance (Load Balancing, Latency) - 10 indices
    32, 33, 34, 35, 36, 37, 38, 39, 40, 249
];
