<?php

/**
 * Class jsonToPuConverter
 */
class jsonToPuConverter
{
    /**
     * @var object
     */
    private object $json_data;

    /**
     * @param $json
     * @return string
     */
    public function getPuFromJson($json): string
    {
        $this->setJsonData($json);
        return $this->getPUData();
    }

    /**
     * @param $input
     * @return void
     */
    private function setJsonData($input): void
    {
        if (is_string($input)) {
            $this->json_data = json_decode($input);
        } else {
            $this->json_data = $input;
        }
    }

    /**
     * @return string
     */
    private function getPUData(): string
    {
        $output = "@startuml\n";
        $output .= $this->makeUMLHeader();
        $output .= $this->makeUMLSections();
        $output .= "]\n@enduml";
        return $output;
    }

    /**
     * @return string
     */
    private function makeUMLHeader(): string
    {
        $output = "{$this->json_data->metadata->type} {$this->json_data->metadata->name}";
        if (isset($this->json_data->metadata->color)) {
            $output .= " " . $this->json_data->metadata->color;
        }
        $output .= " [\n\n\t";
        $output .= "<b>" . $this->json_data->metadata->title . "\n\n";
        return $output;
    }

    /**
     * @return string
     */
    private function makeUMLSections(): string
    {
        $output = "";
        foreach ($this->json_data->sections as $section) {
            $output .= match ($section->separator) {
                'solid' => $this->separatorSolid(),
                'dotted' => $this->separatorDotted()
            };
            $output .= $this->makeUMLSection($section);
        }
        return $output;
    }

    /**
     * @param $section
     * @return string
     */
    private function makeUMLSection($section): string
    {
        $output = "\t<i><b>" . $section->name . "\n\n";
        foreach ($section->data as $key => $value) {
            $output .= "\t" . $key . ": " . $value . "\n\n";
        }
        return $output;
    }

    /**
     * @return string
     */
    private function separatorSolid(): string
    {
        return "----\n\n";
    }

    /**
     * @return string
     */
    private function separatorDotted(): string
    {
        return "....\n\n";
    }

}